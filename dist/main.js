!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){var o=new(r(1));const n=function(){var t,e={},r=/([^&;=]+)=?([^&;]*)/g,o=window.location.hash.substring(1);for(;t=r.exec(o);)e[t[1]]=decodeURIComponent(t[2]);return e}();n.access_token,n.refresh_token,n.error;o.setAccessToken(n.access_token);let s=o.getAudioFeaturesForTrack("5TNhjanmvwvmjCz2WYwSAv");console.log(s);let a=s.tempo;console.log(a)},function(t,e,r){"use strict";var o,n,s,a,u,i,p,l,c=(o="https://api.spotify.com/v1",n=null,s=null,a=function(t,e){return t.abort=e,t},u=function(){var t=Array.prototype.slice.call(arguments),e=t[0],r=t.slice(1);return e=e||{},r.forEach((function(t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})),e},i=function(t,e){var r=new XMLHttpRequest,o=function(o,s){var a=t.type||"GET";r.open(a,function(t,e){var r="";for(var o in e)if(e.hasOwnProperty(o)){var n=e[o];r+=encodeURIComponent(o)+"="+encodeURIComponent(n)+"&"}return r.length>0&&(t=t+"?"+(r=r.substring(0,r.length-1))),t}(t.url,t.params)),n&&r.setRequestHeader("Authorization","Bearer "+n),r.onreadystatechange=function(){if(4===r.readyState){var t=null;try{t=r.responseText?JSON.parse(r.responseText):""}catch(t){console.error(t)}r.status>=200&&r.status<300?function(t){o&&o(t),e&&e(null,t)}(t):(s&&s(r),e&&e(r,null))}},"GET"===a?r.send(null):r.send(t.postData?JSON.stringify(t.postData):null)};return e?(o(),null):function(t,e){var r;if(null!==s){var o=s.defer();t((function(t){o.resolve(t)}),(function(t){o.reject(t)})),r=o.promise}else window.Promise&&(r=new window.Promise(t));return r?new a(r,e):null}(o,(function(){r.abort()}))},p=function(t,e,r,o){var n={},s=null;return"object"==typeof e?(n=e,s=r):"function"==typeof e&&(s=e),"GET"!==(t.type||"GET")&&t.postData&&!o?t.postData=u(t.postData,n):t.params=u(t.params,n),i(t,s)},((l=function(){}).prototype={constructor:c}).getGeneric=function(t,e){return p({url:t},e)},l.prototype.getMe=function(t,e){return p({url:o+"/me"},t,e)},l.prototype.getMySavedTracks=function(t,e){return p({url:o+"/me/tracks"},t,e)},l.prototype.addToMySavedTracks=function(t,e,r){return p({url:o+"/me/tracks",type:"PUT",postData:t},e,r)},l.prototype.removeFromMySavedTracks=function(t,e,r){return p({url:o+"/me/tracks",type:"DELETE",postData:t},e,r)},l.prototype.containsMySavedTracks=function(t,e,r){var n={url:o+"/me/tracks/contains",params:{ids:t.join(",")}};return p(n,e,r)},l.prototype.getMySavedAlbums=function(t,e){return p({url:o+"/me/albums"},t,e)},l.prototype.addToMySavedAlbums=function(t,e,r){return p({url:o+"/me/albums",type:"PUT",postData:t},e,r)},l.prototype.removeFromMySavedAlbums=function(t,e,r){return p({url:o+"/me/albums",type:"DELETE",postData:t},e,r)},l.prototype.containsMySavedAlbums=function(t,e,r){var n={url:o+"/me/albums/contains",params:{ids:t.join(",")}};return p(n,e,r)},l.prototype.getMyTopArtists=function(t,e){return p({url:o+"/me/top/artists"},t,e)},l.prototype.getMyTopTracks=function(t,e){return p({url:o+"/me/top/tracks"},t,e)},l.prototype.getMyRecentlyPlayedTracks=function(t,e){return p({url:o+"/me/player/recently-played"},t,e)},l.prototype.followUsers=function(t,e){var r={url:o+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"user"}};return p(r,e)},l.prototype.followArtists=function(t,e){var r={url:o+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"artist"}};return p(r,e)},l.prototype.followPlaylist=function(t,e,r,n){var s={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/followers",type:"PUT",postData:{}};return p(s,r,n)},l.prototype.unfollowUsers=function(t,e){var r={url:o+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"user"}};return p(r,e)},l.prototype.unfollowArtists=function(t,e){var r={url:o+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"artist"}};return p(r,e)},l.prototype.unfollowPlaylist=function(t,e,r){var n={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/followers",type:"DELETE"};return p(n,r)},l.prototype.isFollowingUsers=function(t,e){var r={url:o+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"user"}};return p(r,e)},l.prototype.isFollowingArtists=function(t,e){var r={url:o+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"artist"}};return p(r,e)},l.prototype.areFollowingPlaylist=function(t,e,r,n){var s={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/followers/contains",type:"GET",params:{ids:r.join(",")}};return p(s,n)},l.prototype.getFollowedArtists=function(t,e){return p({url:o+"/me/following",type:"GET",params:{type:"artist"}},t,e)},l.prototype.getUser=function(t,e,r){var n={url:o+"/users/"+encodeURIComponent(t)};return p(n,e,r)},l.prototype.getUserPlaylists=function(t,e,r){var n;return"string"==typeof t?n={url:o+"/users/"+encodeURIComponent(t)+"/playlists"}:(n={url:o+"/me/playlists"},r=e,e=t),p(n,e,r)},l.prototype.getPlaylist=function(t,e,r,n){var s={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e};return p(s,r,n)},l.prototype.getPlaylistTracks=function(t,e,r,n){var s={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/tracks"};return p(s,r,n)},l.prototype.createPlaylist=function(t,e,r){var n={url:o+"/users/"+encodeURIComponent(t)+"/playlists",type:"POST",postData:e};return p(n,e,r)},l.prototype.changePlaylistDetails=function(t,e,r,n){var s={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e,type:"PUT",postData:r};return p(s,r,n)},l.prototype.addTracksToPlaylist=function(t,e,r,n,s){var a={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/tracks",type:"POST",postData:{uris:r}};return p(a,n,s,!0)},l.prototype.replaceTracksInPlaylist=function(t,e,r,n){var s={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/tracks",type:"PUT",postData:{uris:r}};return p(s,{},n)},l.prototype.reorderTracksInPlaylist=function(t,e,r,n,s,a){var u={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/tracks",type:"PUT",postData:{range_start:r,insert_before:n}};return p(u,s,a)},l.prototype.removeTracksFromPlaylist=function(t,e,r,n){var s=r.map((function(t){return"string"==typeof t?{uri:t}:t})),a={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/tracks",type:"DELETE",postData:{tracks:s}};return p(a,{},n)},l.prototype.removeTracksFromPlaylistWithSnapshotId=function(t,e,r,n,s){var a=r.map((function(t){return"string"==typeof t?{uri:t}:t})),u={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/tracks",type:"DELETE",postData:{tracks:a,snapshot_id:n}};return p(u,{},s)},l.prototype.removeTracksFromPlaylistInPositions=function(t,e,r,n,s){var a={url:o+"/users/"+encodeURIComponent(t)+"/playlists/"+e+"/tracks",type:"DELETE",postData:{positions:r,snapshot_id:n}};return p(a,{},s)},l.prototype.getAlbum=function(t,e,r){return p({url:o+"/albums/"+t},e,r)},l.prototype.getAlbumTracks=function(t,e,r){return p({url:o+"/albums/"+t+"/tracks"},e,r)},l.prototype.getAlbums=function(t,e,r){var n={url:o+"/albums/",params:{ids:t.join(",")}};return p(n,e,r)},l.prototype.getTrack=function(t,e,r){var n={};return n.url=o+"/tracks/"+t,p(n,e,r)},l.prototype.getTracks=function(t,e,r){var n={url:o+"/tracks/",params:{ids:t.join(",")}};return p(n,e,r)},l.prototype.getArtist=function(t,e,r){return p({url:o+"/artists/"+t},e,r)},l.prototype.getArtists=function(t,e,r){var n={url:o+"/artists/",params:{ids:t.join(",")}};return p(n,e,r)},l.prototype.getArtistAlbums=function(t,e,r){return p({url:o+"/artists/"+t+"/albums"},e,r)},l.prototype.getArtistTopTracks=function(t,e,r,n){return p({url:o+"/artists/"+t+"/top-tracks",params:{country:e}},r,n)},l.prototype.getArtistRelatedArtists=function(t,e,r){return p({url:o+"/artists/"+t+"/related-artists"},e,r)},l.prototype.getFeaturedPlaylists=function(t,e){return p({url:o+"/browse/featured-playlists"},t,e)},l.prototype.getNewReleases=function(t,e){return p({url:o+"/browse/new-releases"},t,e)},l.prototype.getCategories=function(t,e){return p({url:o+"/browse/categories"},t,e)},l.prototype.getCategory=function(t,e,r){return p({url:o+"/browse/categories/"+t},e,r)},l.prototype.getCategoryPlaylists=function(t,e,r){return p({url:o+"/browse/categories/"+t+"/playlists"},e,r)},l.prototype.search=function(t,e,r,n){var s={url:o+"/search/",params:{q:t,type:e.join(",")}};return p(s,r,n)},l.prototype.searchAlbums=function(t,e,r){return this.search(t,["album"],e,r)},l.prototype.searchArtists=function(t,e,r){return this.search(t,["artist"],e,r)},l.prototype.searchTracks=function(t,e,r){return this.search(t,["track"],e,r)},l.prototype.searchPlaylists=function(t,e,r){return this.search(t,["playlist"],e,r)},l.prototype.getAudioFeaturesForTrack=function(t,e){var r={};return r.url=o+"/audio-features/"+t,p(r,{},e)},l.prototype.getAudioFeaturesForTracks=function(t,e){return p({url:o+"/audio-features",params:{ids:t}},{},e)},l.prototype.getAudioAnalysisForTrack=function(t,e){var r={};return r.url=o+"/audio-analysis/"+t,p(r,{},e)},l.prototype.getRecommendations=function(t,e){return p({url:o+"/recommendations"},t,e)},l.prototype.getAvailableGenreSeeds=function(t){return p({url:o+"/recommendations/available-genre-seeds"},{},t)},l.prototype.getMyDevices=function(t){return p({url:o+"/me/player/devices"},{},t)},l.prototype.getMyCurrentPlaybackState=function(t,e){return p({url:o+"/me/player"},t,e)},l.prototype.getMyCurrentPlayingTrack=function(t,e){return p({url:o+"/me/player/currently-playing"},t,e)},l.prototype.transferMyPlayback=function(t,e,r){var n=e||{};return n.device_ids=t,p({type:"PUT",url:o+"/me/player",postData:n},e,r)},l.prototype.play=function(t,e){var r="device_id"in t?{device_id:t.device_id}:null,n={};return["context_uri","uris","offset"].forEach((function(e){e in t&&(n[e]=t[e])})),p({type:"PUT",url:o+"/me/player/play",params:r,postData:n},"function"==typeof t?t:{},e)},l.prototype.pause=function(t,e){var r="device_id"in t?{device_id:t.device_id}:null;return p({type:"PUT",url:o+"/me/player/pause",params:r},t,e)},l.prototype.skipToNext=function(t,e){var r="device_id"in t?{device_id:t.device_id}:null;return p({type:"POST",url:o+"/me/player/next",params:r},t,e)},l.prototype.skipToPrevious=function(t,e){var r="device_id"in t?{device_id:t.device_id}:null;return p({type:"POST",url:o+"/me/player/previous",params:r},t,e)},l.prototype.seek=function(t,e,r){var n={position_ms:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:o+"/me/player/seek",params:n},e,r)},l.prototype.setRepeat=function(t,e,r){var n={state:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:o+"/me/player/repeat",params:n},e,r)},l.prototype.setVolume=function(t,e,r){var n={volume_percent:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:o+"/me/player/volume",params:n},e,r)},l.prototype.setShuffle=function(t,e,r){var n={state:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:o+"/me/player/shuffle",params:n},e,r)},l.prototype.getAccessToken=function(){return n},l.prototype.setAccessToken=function(t){n=t},l.prototype.setPromiseImplementation=function(t){var e=!1;try{var r=new t((function(t){t()}));"function"==typeof r.then&&"function"==typeof r.catch&&(e=!0)}catch(t){console.error(t)}if(!e)throw new Error("Unsupported implementation of Promises/A+");s=t},l);"object"==typeof t.exports&&(t.exports=c)}]);