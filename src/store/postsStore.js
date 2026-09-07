import { create } from 'zustand';

export const usePostsStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Маалыматты жүктөөдө ката кетти!');
      }
      const data = await response.json();
      set({ posts: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addTask: (newTask) => set((state) => ({
    posts: [newTask, ...state.posts]
  })),

  updateTask: (id, updatedData) => set((state) => ({
    posts: state.posts.map((post) =>
      post.id === id ? { ...post, ...updatedData } : post
    )
  })),

  deleteTask: (id) => set((state) => ({
    posts: state.posts.filter((post) => post.id !== id)
  })),
}));