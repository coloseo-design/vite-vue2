// import { Icon, Tooltip } from "@uni/vue";
import Icon from '@uni-vue/icon';
import Tooltip from '@uni-vue/tooltip';
import "./assets/styles/code.less";

export default {
  name: "CodeFrame",
  props: {
    description: {
      type: Object,
      default: null,
    },
    rightDemo: {
      type: Object,
      default: null,
    },
    rightCode: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      codeHeight: 0,
      originHeight: 0,
      isOver: false,
      isCopy: false,
      showMore: false,
      open: false,
      codeRef: null,
    };
  },
  mounted() {
    this.codeRef = this.$refs.codeRef;
  },
  methods: {
    getNode(ref) {
      this.codeRef = ref;
    },
    handleOver() {
      this.isOver = true;
    },
    handleOut() {
      this.isOver = false;
      this.isCopy = false;
    },
    handleCopy() {
      const textarea = document.createElement("textarea");
      textarea.value = `${this.rightCode}`;
      document.body.appendChild(textarea);
      textarea.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      document.body.removeChild(textarea);
      this.isCopy = true;
    },
    handleOpen() {
      if (!this.open) {
        this.open = true;
        if (this.codeRef) {
          const { height } = this.codeRef.getBoundingClientRect();
          this.originHeight = height;
          if (height - 14 > 320) {
            this.showMore = true;
            this.codeHeight = 320;
          } else {
            this.showMore = false;
            this.codeHeight = height;
          }
        }
      } else if (this.showMore) {
        this.showMore = false;
        this.codeHeight = this.originHeight;
      } else {
        this.showMore = false;
        this.open = false;
      }
    },
  },
  render(h) {
    return h(
      "div",
      {
        class: "codeFrame",
      },
      h(
        "div",
        {
          class: "code-left",
        },
        this.description || this.$slots.description
      ),
      h(
        "div",
        {
          class: "code-right",
        },
        h(
          "div",
          {
            style: {
              padding: "24px",
            },
          },
          this.rightDemo || this.$slots.demo
        ),
        h(
          "div",
          {
            class: "code-border",
          },
          h(
            Tooltip,
            {
             props: {
              title: this.copySuccess ? "复制成功" : "复制代码",
              trigger: "hover",
             },
            },
            h(Icon, {
              props: {
                name: this.copySuccess ? "success" : "copy",
              },
              style: {
                fontSize: "20px",
                color: "#ACAFB9",
                cursor: "pointer",
                marginRight: "20px",
              },
              onClick: this.handleCopy,
            })
          ),
          h(
            Tooltip,
            {
              title: this.open ? "收起代码" : "显示代码",
              trigger: "hover",
            },
            h(Icon, {
              name: "productd-evelop",
              style: {
                fontSize: "20px",
                color: "#ACAFB9",
                cursor: "pointer",
              },
              onClick: () => {
                this.open = !this.open;
              },
            })
          ),
          this.open &&
            h(
              "div",
              {
                style: {
                  textAlign: "left",
                },
              },
              h(
                "div",
                {
                  "v-highlight": true,
                },
                h("pre", null, h("code", null, this.rightCode))
              )
            )
        )
      )
    );
  },
};
