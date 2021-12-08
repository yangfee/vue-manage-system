<template>
    <div class="about">
        <Header />
        <Sidebar />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <Tags />
            <div class="content">
                <!-- 子路由内容 -->
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/SideBar/index.vue";
import Tags from "@/components/Tags.vue";

const store = useStore();
const tagsList = computed(() =>
    store.state.tagsList.map((item) => item.name)
);
const collapse = computed(() => store.state.collapse);

</script>
