<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <ShareNetwork v-for="network in networks" :network="network.network" :key="network.network"
            :style="{ backgroundColor: network.color }" :url="sharing.url" :title="sharing.title"
            :description="sharing.description" :quote="sharing.quote" :hashtags="sharing.hashtags"
            :twitterUser="sharing.twitterUser">
            <v-btn :style="{ backgroundColor: network.color, color: '#ffffff' }" density="comfortable">
             <font-awesome-icon :icon="network.icon" />&nbsp; {{ network.name }}
            </v-btn>
          </ShareNetwork>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>


<script>
export default {
  props: {
    sharing: {
      type: Object,
      default: () => ({
        title: 'JAPAN RUGBY Player Stats - datairoro',
        description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        quote: 'The hot reload is so fast it\'s near instant. - Evan You',
        hashtags: 'rugbyjp,ラグビー',
        twitterUser: 'iroro_sports',
        url: "https://datairoro.com"
      })
    },
    networks: {
      type: Array,
      default: () => [
        { network: 'baidu', name: 'Baidu', icon: 'fas fah fa-lg fa-paw', color: '#2529d8' },
        { network: 'buffer', name: 'Buffer', icon: 'fab fah fa-lg fa-buffer', color: '#323b43' },
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
        { network: 'evernote', name: 'Evernote', icon: 'fab fah fa-lg fa-evernote', color: '#2dbe60' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'flipboard', name: 'Flipboard', icon: 'fab fah fa-lg fa-flipboard', color: '#e12828' },
        { network: 'hackernews', name: 'HackerNews', icon: 'fab fah fa-lg fa-hacker-news', color: '#ff4000' },
        { network: 'instapaper', name: 'Instapaper', icon: 'fas fah fa-lg fa-italic', color: '#428bca' },
        { network: 'line', name: 'Line', icon: 'fab fah fa-lg fa-line', color: '#00c300' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
        { network: 'messenger', name: 'Messenger', icon: 'fab fah fa-lg fa-facebook-messenger', color: '#0084ff' },
        { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'fab fah fa-lg fa-odnoklassniki', color: '#ed812b' },
        { network: 'pinterest', name: 'Pinterest', icon: 'fab fah fa-lg fa-pinterest', color: '#bd081c' },
        { network: 'pocket', name: 'Pocket', icon: 'fab fah fa-lg fa-get-pocket', color: '#ef4056' },
        { network: 'quora', name: 'Quora', icon: 'fab fah fa-lg fa-quora', color: '#a82400' },
        { network: 'reddit', name: 'Reddit', icon: 'fab fah fa-lg fa-reddit-alien', color: '#ff4500' },
        { network: 'skype', name: 'Skype', icon: 'fab fah fa-lg fa-skype', color: '#00aff0' },
        { network: 'sms', name: 'SMS', icon: 'fas fah fa-lg fa-comment-dots', color: '#333333' },
        { network: 'stumbleupon', name: 'StumbleUpon', icon: 'fab fah fa-lg fa-stumbleupon', color: '#eb4924' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
        { network: 'tumblr', name: 'Tumblr', icon: 'fab fah fa-lg fa-tumblr', color: '#35465c' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'viber', name: 'Viber', icon: 'fab fah fa-lg fa-viber', color: '#59267c' },
        { network: 'vk', name: 'Vk', icon: 'fab fah fa-lg fa-vk', color: '#4a76a8' },
        { network: 'weibo', name: 'Weibo', icon: 'fab fah fa-lg fa-weibo', color: '#e9152d' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
        { network: 'wordpress', name: 'Wordpress', icon: 'fab fah fa-lg fa-wordpress', color: '#21759b' },
        { network: 'xing', name: 'Xing', icon: 'fab fah fa-lg fa-xing', color: '#026466' },
        { network: 'yammer', name: 'Yammer', icon: 'fab fah fa-lg fa-yammer', color: '#0072c6' },
        { network: 'instagram', name: 'instagram', icon: 'fab fah fa-lg fa-instagram', color: '#0072c6' },
        { network: 'discord', name: 'Discord', icon: 'fab fah fa-lg fa-discord', color: '#0072c6' },
      ]
    },
    url: {
      type: String
    }
  },
  methods:{
    /* calcColor
     * 彩度を上げる
     */
    calcColor(code){
      const pre = 3
      if(code[0] === "#"){
        let red = parseInt(code.substr(1, 2), 16);
        let green = parseInt(code.substr(3, 2), 16);
        let blue = parseInt(code.substr(5, 2), 16);

        if(red > green){
          if(red > blue){
            green = green / pre;
            blue = blue / pre;
          }else{
            green = green / pre;
            red = red / pre;
          }
        }else{
          if(green > blue){
            red = red / pre;
            blue = blue / pre;
          }else{
            green = green / pre;
            red = red / pre;
          }
        }

        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
      }

      return code
      
    }
  }
}
</script>
