<template>
  <div class="list-container">
    <div class="note-list-header">
      <v-tabs class="tab-list" v-model="notes.folders" show-arrows background-color="red-lighten-2" height="50"
              hide-slider>
        <v-tab class="tab rounded-lg" v-if="$store.getters['lengthFolders'] <= 0"
               @click="$store.commit('setModalVisibility')">
          Create note
        </v-tab>
        <v-tab class="tab rounded-lg"
               v-show="notes.folders.length >= 0"
               :class="{ 'item-selected': folder === $store.getters['selectedFolder'] }"
               v-for="folder in $store.getters['tabList']" :key="folder" :value="folder"
               @click="updateSelectedFolder(folder)">
          {{ folder }}
        </v-tab>
      </v-tabs>
    </div>
    <span class="note-list-title" v-if="$store.getters['lengthFolders']> 0">{{ notes.selectedFolder }}</span>
    <v-list class="card" lines="two">
      <v-list-item
          @click="updateDisplayInfo(item)"
          class="element"
          :class="{ 'item-selected': item.id === selectedNoteId }"
          v-for="item in notes.notes"
          :key="item.id"
          :title="item.title"
          :subtitle="item.data"
      >
        <span class="delete-button" v-if="notes.isDeletingMode" @click="deleteNote(item)">Delete</span>
      </v-list-item>

    </v-list>
    <v-btn
        class="create-note-btn"
        variant="outlined"
        size="large"
        v-model="notes.selectedFolder"
        icon
        color="white"
        @click="$store.commit('setModalVisibility')"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'NoteList',
  data() {
    return {
      isSelectedClass: true,
      buttonOffset: 500,
      selectedNoteId: '',
    };
  },
  methods: {
    updateDisplayInfo(item) {
      this.selectedNoteId = item.id;
      this.$store.commit('setNoteId', this.selectedNoteId);
      this.$store.commit('setNoteListVisibility');
    },
    updateSelectedFolder(item) {
      this.$store.commit('selectFolder', item);
      this.$store.commit('setNotesByFolder', item);
    },
    deleteNote(item) {
      this.$store.commit('deleteNote', item.id);
      if (this.notes.notes.length === 0) {
        this.$store.commit('setSelectedObjectState', {
          selectedFolder: [],
          selectedNoteId: null, // For the stub
          folders: this.notes.folders.filter((item) => item !== this.notes.selectedFolder),
        });
      }
    },
    getButtonOffset() {
      return window.innerHeight - 100;
    },
  },
  computed: {
    ...mapGetters(['notes']),
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>