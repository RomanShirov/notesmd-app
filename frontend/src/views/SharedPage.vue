<template>
  <div class="app-container">
    <md-editor
        class="editor readonly"
        ref="editor"
        v-model="view"
        theme="dark"
        language="en-US"
        codeTheme="atom"
        previewOnly="true"
    ></md-editor>
    <v-btn
        class="download-btn"
        title="Save as Markdown file"
        variant="outlined"
        size="large"
        icon
        color="white"
        @click="downloadMarkdown();"
    >
      <v-icon class="icon">mdi-download</v-icon>
    </v-btn>
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import axios from 'axios';
import {saveAs} from 'file-saver';

export default {
  name: 'SharedPage',
  components: {
    MdEditor,
  },
  data() {
    return {
      title: null,
      data: null,
      view: null,
    };
  },
  methods: {
    downloadMarkdown() {
      const data = this.data;
      const blob = new Blob([data],
          {type: 'text/plain;charset=utf-8'});
      saveAs(blob, `${this.title}.md`);
    },
  },
  beforeMount() {
    axios.get(`${this.$store.state.serverIpAddr}/api/notes/shared/${this.$route.params.noteId}`).
        then((response) => {
          const title = response.data.title;
          document.title = title + ' — ' + this.$route.params.user;
          this.title = response.data.title;
          this.data = response.data.data;
          this.view = `# ${title} \n` + response.data.data;
        });
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/NoteEditor/Editor'

.app-container
  user-select: text
  flex-direction: column

.editor
  padding: 0 0 0 50px
  height: 100%
  width: 100%

.download-btn
  background-color: #cc4f4e
  position: absolute
  bottom: 30px
  right: 30px
  border: none


@media (max-width: 768px)
  .app-container
    width: 100%

  .editor
    font-size: 16px
    padding: 0 0 0 10px
</style>