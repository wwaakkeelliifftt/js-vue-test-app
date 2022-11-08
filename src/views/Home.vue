<template>
  <div class="backgroundHome">
    <h2>Home Page Template</h2>

    <p>ExoPlayer is designed to make few assumptions about (and hence impose few restrictions on) the type of the media being played, how and where it is stored, and how it is rendered. Rather than implementing the loading and rendering of media directly, ExoPlayer implementations delegate this work to components that are injected when a player is created or when it's prepared for playback. Components common to all ExoPlayer implementations are:</p>

<!--    <a href="/todos">Todooos</a>-->
    <router-link to="/todos">Todooos (router-link)</router-link>
  </div>
</template>

<style>
.backgroundHome {
  border: 5px solid #cdc;
  padding: .5rem 1rem;
  background-color: #ccdded;
}
</style>