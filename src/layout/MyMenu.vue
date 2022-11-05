<template>
    <el-menu :router="true"
      default-active="/wel"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="item in route" :key="item.path">
        <div v-if="item.children">
            <el-submenu :index="item.path">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{item.meta.tit}}</span>
                </template>
                <el-menu-item v-for="abc in item.children" :key="abc.path" :index="abc.path">
                    <i :class="abc.meta.icon"></i>
                    <span slot="title">{{abc.meta.tit}}</span>
                </el-menu-item>
            </el-submenu>
        </div>
        <div v-else>
            <el-menu-item :index="item.path">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.tit}}</span>
            </el-menu-item>
        </div>
      </div>
      <!-- <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
</template>

<script>
import {child} from '@/router'
    export default {
        data() {
            return {
                route:child
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>

<style  scoped>
    .el-menu{
        height: 100%;
        overflow: hidden;
    }
</style>