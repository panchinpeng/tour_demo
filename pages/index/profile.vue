<template>
  <div class="profileWrapper">
    <div class="avatarWrap">
      <img v-if="imgUrl" :src="imgUrl" />
      <label for="picPic">
        <font-awesome-icon icon="images" class="pickPic" />
      </label>
      <input id="picPic" type="file" accept="image/*" @change="handlePic" />
    </div>
    <div class="settingWrap">
      <div>
        <ul class="updateInfo">
          <li
            :class="{ rotate: active === 'nickname' }"
            @click="rotateLeave('nickname')"
          >
            暱稱
          </li>
          <li
            :class="{ rotate: active === 'live' }"
            @click="rotateLeave('live')"
          >
            居住地
          </li>
        </ul>
      </div>
      <!-- <ul>
        <li>
          <input type="text" placeholder="暱稱" />
        </li>
        <li>
          <input type="text" placeholder="居住地" />
        </li>
      </ul> -->
    </div>
    <skeketon v-if="$store.state.showSkeleton" :loading-time="progress" />
  </div>
</template>
<script>
import { uploadAvatar, getAvatarUrl } from "~/components/firebase/picture"
import skeketon from "~/components/common/skeketon"
export default {
  components: {
    skeketon
  },
  data() {
    return {
      imgUrl: null,
      progress: 0,
      active: null
    }
  },
  async created() {
    let url = await getAvatarUrl(this.$store.state.authentication)
    this.imgUrl = url
  },
  methods: {
    async handlePic(e) {
      this.$store.dispatch("setShowSkeketon", true)
      try {
        const url = await uploadAvatar(
          e.target.files[0],
          this.$store.state.authentication,
          this.handleUploadProgress
        )
        this.imgUrl = url
        this.$store.dispatch("setShowSkeketon", false)
        this.progress = 0
      } catch (e) {
        alert("發生錯誤...")
      }
    },
    handleUploadProgress(snapshot) {
      this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    },
    rotateLeave(type) {
      this.active = type
    }
  }
}
</script>
<style>
.profileWrapper {
  max-width: 900px;
  margin: auto;
  padding-top: 10px;
}
.avatarWrap {
  border-radius: 50%;
  background: #eceaea;
  width: 250px;
  height: 250px;
  margin: auto;
  margin: auto;
  position: relative;
  animation: border-size 2s ease infinite alternate;
}
.avatarWrap > img {
  width: 100%;
  height: 100%;
  padding: 14px;
  border-radius: 50%;
}
.avatarWrap .pickPic {
  font-size: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  background-color: silver;
  padding: 5px;
  border-radius: 4px;
  border-top-left-radius: 15px;
}
#picPic {
  display: none;
}
.settingWrap {
  padding: 15px;
}
.profileWrapper ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}
.profileWrapper input {
  border: 0;
  border-bottom: 1px solid gray;
  width: 100%;
  margin: 15px 0;
  color: #726363;
  outline: 0;
}
.updateInfo {
  text-align: center;
}
.updateInfo li {
  padding: 5px;
  border-radius: 50%;
  background: #3f51b526;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
}
.updateInfo li.rotate {
  position: relative;
  animation: rotateAndLeave 1s linear forwards;
}
@keyframes rotateAndLeave {
  0% {
    transform: rotate(0deg);
    left: 0;
  }
  100% {
    transform: rotate(360deg);
    left: 130%;
  }
}
@keyframes border-size {
  0% {
    border: 8px double white;
  }
  100% {
    border: 0px double white;
  }
}
</style>
