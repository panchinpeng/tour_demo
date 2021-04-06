<template>
  <div class="wrapper">
    <div class="avatarWrap">
      <img
        :src="
          imgUrl
            ? imgUrl
            : 'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'
        "
      />
      <label for="picPic">
        <font-awesome-icon icon="images" class="pickPic" />
      </label>
      <input id="picPic" type="file" accept="image/*" @change="handlePic" />
    </div>
    <skeketon v-if="$store.state.showSkeleton" :loading-time="progress" />
  </div>
</template>
<script>
import { uploadAvatar } from "~/components/firebase/picture"
import skeketon from "~/components/common/skeketon"
export default {
  components: {
    skeketon
  },
  data() {
    return {
      imgUrl: "",
      progress: 0
    }
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
      } catch (e) {
        alert("發生錯誤...")
      }
    },
    handleUploadProgress(snapshot) {
      this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }
  }
}
</script>
<style>
.wrapper {
  max-width: 900px;
  margin: auto;
  padding-top: 10px;
}
.avatarWrap {
  border-radius: 50%;
  background: #eceaea;
  width: 300px;
  height: 300px;
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
  font-size: 37px;
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
@keyframes border-size {
  0% {
    border: 8px double white;
  }
  100% {
    border: 0px double white;
  }
}
</style>
