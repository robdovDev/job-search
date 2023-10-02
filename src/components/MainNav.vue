<template>
  <header>
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="item in menuItems" :key="item.menuName" class="h-full ml-9 first:ml-0">
              <a :href="item.url" class="flex h-full items-center py-2.5">{{ item.menuName }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" @click="logoutUser" />
          <action-button v-else @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage
  },
  data() {
    return {
      company: 'BDNet',
      url: 'https://careers.google.com',
      menuItems: [
        { menuName: 'Teams', url: '/teams', ml: '' },
        { menuName: 'Locations', url: '/locations', ml: 'ml-9' },
        { menuName: 'Life at BDRET', url: '/life-at-dbdret', ml: 'ml-9' },
        { menuName: 'How we hire', url: '/how-we-hire', ml: 'ml-9' },
        { menuName: 'Students', url: '/students', ml: 'ml-9' },
        { menuName: 'Jobs', url: '/jobs', ml: 'ml-9' }
      ],
      isLoggedIn: false
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>

<style scope></style>
