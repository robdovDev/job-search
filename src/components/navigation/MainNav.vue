<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >{{ company }}</router-link
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="item in menuItems"
              :key="item.menuName"
              class="h-full ml-9 first:ml-0"
            >
              <router-link
                :to="item.url"
                class="flex h-full items-center py-2.5"
                >{{ item.menuName }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image
            v-if="isLoggedIn"
            @click="logoutUser"
          />
          <action-button
            v-else
            text="Sign in"
            @click="loginUser"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from "pinia"
import { useUserStore } from "@/stores/user"

import ActionButton from "@/components/shared/ActionButton.vue"
import ProfileImage from "@/components/navigation/ProfileImage.vue"
import SubNav from "@/components/navigation/SubNav.vue"

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      company: "BDNet",
      url: "https://careers.google.com",
      menuItems: [
        { menuName: "Teams", url: "/" },
        { menuName: "Locations", url: "/" },
        { menuName: "Life at BDRET", url: "/" },
        { menuName: "How we hire", url: "/" },
        { menuName: "Students", url: "/" },
        { menuName: "Jobs", url: "/jobs/results" }
      ]
    }
  },
  computed: {
    ...mapState(useUserStore, ["isLoggedIn"]),
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ["loginUser", "logoutUser"])
  }
}
</script>

<style scope></style>
