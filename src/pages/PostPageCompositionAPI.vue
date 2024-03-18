<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      v-focus
      placeholder="Поиск..."
      style="margin-bottom: 15px"
    />
    <div class="app__btns">
      <my-button @click="showDialog" style="margin: 15px 0">
        Создать пользователя
      </my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div
      v-if="isPostsLoadedEnough"
      v-intersection="loadMorePosts"
      class="observer"
    ></div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  setup() {
    const store = useStore();
    const dialogVisible = ref(false);

    const posts = computed(() => store.state.post.posts);
    const isPostsLoading = computed(() => store.state.post.isPostsLoading);
    const selectedSort = computed(() => store.state.post.selectedSort);
    const searchQuery = computed(() => store.state.post.searchQuery);
    const sortOptions = computed(() => store.state.post.sortOptions);
    const sortedAndSearchedPosts = computed(
      () => store.getters["post/sortedAndSearchedPosts"]
    );

    const setSearchQuery = (query) =>
      store.commit("post/setSearchQuery", query);
    const setSelectedSort = (sort) =>
      store.commit("post/setSelectedSort", sort);
    const showDialog = () => (dialogVisible.value = true);
    const createPost = (post) => {
      store.commit("post/setPosts", [post, ...posts.value]);
      dialogVisible.value = false;
    };
    const removePost = (post) => {
      store.commit(
        "post/setPosts",
        posts.value.filter((p) => p.id !== post.id)
      );
    };
    const loadMorePosts = () => store.dispatch("post/loadMorePosts");
    const isPostsLoadedEnough = () => {
      return this.posts.length >= 10;
    };

    store.dispatch("post/fetchPosts");

    return {
      dialogVisible,
      posts,
      isPostsLoading,
      selectedSort,
      searchQuery,
      sortOptions,
      sortedAndSearchedPosts,
      setSearchQuery,
      setSelectedSort,
      showDialog,
      createPost,
      removePost,
      loadMorePosts,
      isPostsLoadedEnough,
    };
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}

.observer {
  min-height: 20px;
}
</style>
