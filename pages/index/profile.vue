<template>
  <div class="profileWrapper">
    <div class="personal-setting-wrap">
      <div class="avatarWrap">
        <img v-if="imgUrl" :src="imgUrl" />
        <label for="picPic">
          <font-awesome-icon icon="images" class="pickPic" />
        </label>
        <input id="picPic" type="file" accept="image/*" @change="handlePic" />
      </div>
      <div class="settingWrap">
        <ul class="updateInfo">
          <li>
            <b-form-select
              v-model="city"
              :options="cityOptions"
              @change="userChange"
            />
            <tip>
              當選擇你的居住城市後，將自動優先推薦您這些城市的景點唷!!
            </tip>
          </li>
          <li>
            <b-form-input
              v-model.trim="nickname"
              placeholder="您的暱稱"
              @input="userChange"
            />
            <tip>您的暱稱將於評論中顯示出來唷!!</tip>
          </li>
          <li class="text-right pt-1">
            <b-button
              variant="success"
              :class="{ 'unsave-warn': isUserChange }"
              @click="submitSettting"
            >
              存檔
            </b-button>
          </li>
        </ul>
      </div>
    </div>
    <recordStatistics
      :commit-count="commitCount"
      :reply-count="replyCount"
      :favorite-count="favoriteCount"
      :login-count="loginCount"
    />
    <skeketon v-if="$store.state.showSkeleton" :loading-time="progress" />
  </div>
</template>
<script>
import { uploadAvatar, getAvatarUrl } from "~/components/firebase/picture"
import skeketon from "~/components/common/skeketon"
import tip from "~/components/common/tip"
import recordStatistics from "~/components/profile/recordStatistics"

import {
  updateUserSetting,
  getUserSetting
} from "~/components/firebase/userFunction"
import { readFavoriteCount } from "~/components/firebase/favoriteData"
export default {
  components: {
    skeketon,
    tip,
    recordStatistics
  },
  data() {
    return {
      imgUrl: null,
      progress: 0,
      cityOptions: [
        { value: "請選擇居住城市", text: "請選擇居住城市", disabled: true },
        { value: "臺北市", text: "臺北市" },
        { value: "新北市", text: "新北市" },
        { value: "桃園市", text: "桃園市" },
        { value: "臺中市", text: "臺中市" },
        { value: "臺南市", text: "臺南市" },
        { value: "高雄市", text: "高雄市" },
        { value: "新竹縣", text: "新竹縣" },
        { value: "苗栗縣", text: "苗栗縣" },
        { value: "彰化縣", text: "彰化縣" },
        { value: "南投縣", text: "南投縣" },
        { value: "雲林縣", text: "雲林縣" },
        { value: "嘉義縣", text: "嘉義縣" },
        { value: "屏東縣", text: "屏東縣" },
        { value: "宜蘭縣", text: "宜蘭縣" },
        { value: "花蓮縣", text: "花蓮縣" },
        { value: "臺東縣", text: "臺東縣" },
        { value: "澎湖縣", text: "澎湖縣" },
        { value: "金門縣", text: "金門縣" },
        { value: "連江縣", text: "連江縣" },
        { value: "基隆市", text: "基隆市" },
        { value: "新竹市", text: "新竹市" },
        { value: "嘉義市", text: "嘉義市" }
      ],
      city: "",
      nickname: "",
      isUserChange: false,
      commitCount: 0,
      replyCount: 0,
      favoriteCount: 0,
      loginCount: 0
    }
  },
  async created() {
    const uid = this.$store.state.authentication
    let url = await getAvatarUrl(uid)
    let {
      city,
      nickname,
      commitCount,
      replyCount,
      loginCount
    } = await getUserSetting(uid)
    console.log(commitCount)
    this.imgUrl = url
    this.city = city
    this.nickname = nickname
    this.commitCount = commitCount
    this.replyCount = replyCount
    this.loginCount = loginCount
    this.favoriteCount = await readFavoriteCount(
      this.$store.state.authentication
    )
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
    },
    userChange() {
      this.isUserChange = true
    },
    async submitSettting() {
      this.$store.dispatch("setLoading", true)
      try {
        await updateUserSetting({
          city: this.city,
          nickname: this.nickname,
          uid: this.$store.state.authentication
        })
      } catch (e) {
        console.log(e)
      }
      this.$store.dispatch("setLoading", false)
    }
  }
}
</script>
<style>
.profileWrapper {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
}
.avatarWrap {
  border-radius: 50%;
  background: #eceaea;
  width: 250px;
  height: 250px;
  margin: auto;
  margin: auto;
  position: relative;
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
.updateInfo > li {
  text-align: left;
  width: 100%;
}
.updateInfo > li::after {
  content: "";
  clear: both;
  display: table;
}
.personal-setting-wrap {
  overflow: auto;
  max-width: 900px;
  margin: auto;
}
.unsave-warn {
  box-shadow: 0px 0px 1px 1px #ef9797;
}
</style>
