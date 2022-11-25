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

export default {
  name: 'SharedPage',
  components: {
    MdEditor,
  },
  data() {
    return {
      data: null,
    };
  },
  beforeMount() {
    axios.get(`${this.$store.state.serverIpAddr}/api/notes/shared/${this.$route.params.noteId}`).
        then((response) => {
          const title = response.data.title;
          document.title = title + ' — ' + this.$route.params.user;
          this.data = `# ${title} \n` + response.data.data;
        });
  },
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