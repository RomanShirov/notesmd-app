<template>
  <div class="app-container">
    <Sidebar/>
    <NoteList/>
    <Editor/>
  </div>
</template>

<script>
import Sidebar from "@/components/NoteEditor/Sidebar";
import NoteList from "@/components/NoteEditor/NoteList";
import Editor from "@/components/NoteEditor/Editor";

export default {
  name: "NoteEditor",
  components: {
    Sidebar,
    NoteList,
    Editor
  },
}
</script>
