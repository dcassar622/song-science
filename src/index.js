import { TrackIDManager } from "./components/track-id-manager.js";
import { TrackInfoComponent } from "./components/track-info.js";
import { AudioPlayer } from "./components/audio-player.js";
import { ChartsComponent } from "./components/charts-component.js";
import { TrackSectionsComponent } from "./components/track-sections.js";
import { setupAnchorListener } from "./components/sidebar-anchor";

var Spotify = require("spotify-web-api-js");
var spotify = new Spotify();

const params = getHashParams();
let access_token = params.access_token,
  refresh_token = params.refresh_token,
  error = params.error;

spotify.setAccessToken(params.access_token);

export function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

/* ---------- main logic ---------- */
const searchForm = document.getElementById("search-form");
const trackDataArea = document.getElementById("track-data");
const infoPlayerArea = document.getElementById("info-player-area");
const loginButton = document.getElementById("login-button");

if (params.access_token) {
  loginButton.innerHTML = "Logged In";
} else {
  const loginMessageSection = document.getElementById("login-message-section");
  loginMessageSection.innerHTML = `<h2>Welcome to Song Science!</h2>
          <br />
          <h4>Please log in to your Spotify account using the button above to start using the app...</h4>
            <br />
          <h5><sup>*Due to Spotify's API security restrictions, only users with a premium account can access and use the data</h5></sup> `;
}

// Get track data and display it
searchForm.addEventListener("submit", e => {
  e.preventDefault();
  trackDataArea.className = "wrapper";
  let trackIDManager = new TrackIDManager();
  let data = trackIDManager.getTrackId(spotify);
  data.then(function(trackId) {
    setupData(trackId);
  });

  // Close modal and clear search form
  $("#modal-search").modal("hide");
  document.getElementById("track-name").value = "";
  document.getElementById("track-id").value = "";
});

function setupData(trackId) {
  infoPlayerArea.className = "";

  // Sets up audio player
  let audioPlayer = new AudioPlayer();
  audioPlayer.setupPlayer(trackId);

  // Sets up and displays track info
  let trackInfoComponent = new TrackInfoComponent(spotify, trackId);
  trackInfoComponent.getTrackInfo();

  // Sets up and displays track sections
  let trackDataComponent = new TrackSectionsComponent(spotify, trackId);
  trackDataComponent.getSectionsData();

  // Sets up and displays charts
  let chartsComponent = new ChartsComponent(spotify, trackId);
  chartsComponent.setupCharts();

  // Set up event listeners for sidebar anchor icons (anchor tags)
  setupAnchorListener("sidebar-info", "track-data");
  setupAnchorListener("sidebar-chart", "chart-wrapper");
  setupAnchorListener("sidebar-grid", "grid-sections-wrapper");
}
