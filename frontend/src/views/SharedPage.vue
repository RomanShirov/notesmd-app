<template>
  <div class="app-container">
    <md-editor
        class="editor readonly"
        ref="editor"
        v-model="data"
        theme="dark"
        language="en-US"
        codeTheme="atom"
        previewOnly="true"
    ></md-editor>
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import axios from 'axios';
import router from '@/router';

export default {
  name: 'SharedPage',
  components: {
    MdEditor,
  },
  data(){
    return{
      user: this.$route.params.user,
      noteId: this.$route.params.noteId,
      data: ''
    }
  },
  beforeMount() {
    axios.get(`${this.$store.state.serverIpAddr}/api/notes/shared/${this.$route.params.noteId}`).
        then((response) => {
          document.title = response.data.title + ' — ' + this.$route.params.user
          this.data = response.data.data;
        })
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/NoteEditor/Editor'
.app-container
  flex-direction: column
  background: #1b1d1f

.editor
  padding: 0 0 0 50px
  height: 100%
  width: 100%
</style>