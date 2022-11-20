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

export default {
  name: 'SharedPage',
  components: {
    MdEditor,
  },
  data(){
    return{
      user: this.$route.params.user,
      noteSharedId: this.$route.params.noteSharedId,
      title: '',
      data: '# Title\n' + `#### Published by ${this.$route.params.user} \n`
    }
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
  border-radius: 15px
  width: 50%
</style>