<template>
  <div class="flex">
    <aside class="sidebar h-full h-screen bg-menu_yellow">
      <ul class="w-160px page-menu-inner">
        <li class="hover:bg-menu_gray">
          <a
            @click="setMenu()"
            class="sidebar_toggle hover:text-menu_yellow w-full flex items-center justify-center py-3 text-menu_gray"
            v-if="$resize && $mq.above(690)"
          >
            <i class="uil-wrap-text text-4xl"></i>
          </a>

          <a
            @click="setMenuMobile()"
            class="hover:text-menu_yellow w-full flex items-center justify-center py-3 text-menu_gray"
            v-if="$resize && $mq.below(690)"
          >
            <i class="uil-wrap-text text-4xl"></i>
          </a>
        </li>
        <nav class="sh-link-wrapper">
          <ul data-submenu-title="Apps">
            <li>
              <a href="#">
                <i class="uil-dashboard"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="chat">
                <i class="uil-comment-alt-dots"></i>
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a>
                <i class="uil-envelope-alt"></i>
                <span>Email</span>
              </a>
              <ul>
                <li>
                  <a href="email-inbox">Inbox</a>
                  <a href="email-inbox-read">Email Read</a>
                  <a href="email-compose">Email Compose</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="uil-receipt"></i>
                <span>Report</span>
              </a>
              <ul>
                <li>
                  <a href="shop-card">Products Grid</a>
                </li>
                <li>
                  <a href="shop-listing">Products List</a>
                </li>
                <li>
                  <a href="shop-product">Product</a>
                </li>
                <li>
                  <a href="shop-cart">Products Cart</a>
                </li>
                <li>
                  <a href="shop-checkout">Products Checkout</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </ul>
    </aside>
    <div>
      <header
        class="h-60px header_scroll w-full bg-menu_gray"
        :class="{ header_fixed: scrollPosition > 70 }"
      >
        <nav class="flex justify-between items-center h-full">
          <div class="h-full"></div>
          <ul class="flex h-full">
            <li class="flex items-center h-full header">
              <a
                v-click-outside="hideDropDownMennu"
                @click="toggleDropDownMenu"
                class="flex items-center h-full px-3"
              >
                <span class="font-sans text-xs text-menu_profile">Heng Seyha</span>
                <img class="rounded-full w-8 h-8 ml-2" src="@/assets/img/user.png" />
                <span class="caret text-gray-400"></span>
              </a>
              <div
                class="icon-browse uk-dropdown uk-open"
                v-show="dropDownMenu"
                style="right: 56px; top: 60px;"
              >
                <a href="#" class="icon-menu-item">
                  <i class="uil-shop"></i> Dashboard
                </a>
                <a href="#" class="icon-menu-item">
                  <i class="uil-envelope-alt"></i> Messages
                </a>
                <a href="#" class="icon-menu-item">
                  <i class="uil-bookmark"></i> Bookmark
                </a>
                <a href="#" class="icon-menu-item">
                  <i class="uil-shopping-basket"></i> Cart
                </a>
                <a href="#" class="icon-menu-item">
                  <i class="uil-shield-check"></i> Privacy
                </a>
                <a href="#" class="icon-menu-item">
                  <i class="uil-bolt-alt"></i> Upgrade
                </a>
                <a href="#" class="more-app">More Features</a>
              </div>
            </li>
            <li class="flex justify-between items-center h-full hover:bg-white">
              <a class="flex h-full px-4">
                <div class="app-icon h-full flex justify-center items-center">
                  <div class="app-icon-inner">
                    <div class="app-icon-block first"></div>
                    <div class="app-icon-block"></div>
                    <div class="app-icon-block"></div>
                    <div class="app-icon-block"></div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="w-full">
        <div class="content px-5 pt-3">
          <h3 class="text-xl mb-3 text-menu_title">New Order</h3>
          <div class="px-2">
            <div class="flex -mx-3">
              <div class="w-1/2 px-1">
                <div class="border-t-4 border-menu_yellow"></div>
              </div>
              <div class="w-1/2 px-1">
                <div class="border-t-4 border-menu_low"></div>
              </div>
            </div>
          </div>
          <div class="content-card bg-white px-6 py-5">
            <div class="broadcum">
              <ul class="flex">
                <li>
                  <a href>Order Form</a>
                </li>
                <li>
                  <a href>Order Form</a>
                </li>
              </ul>
            </div>
            <div class="form-conrol">
              <div class="form-title border-b pb-3 mt-5">
                <h3 class="text-xl">1. Order Details</h3>
              </div>
              <el-row class="flex mt-3" :gutter="20">
                <el-col :span="12">
                  <label for>Order Name</label>
                  <el-input clear placeholder="Please input" v-model="input"></el-input>
                </el-col>
                <el-col :span="12">
                  <label for>My License Number</label>
                  <el-input clear placeholder="Please input" v-model="input"></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="12" :sm="12" :lg="6">
                  <label for>Action</label>
                  <el-select v-model="value" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="6">
                  <label for>Date</label>
                  <el-date-picker v-model="value1" type="date" placeholder="Pick a day"></el-date-picker>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="6">
                  <label for>Time Window</label>
                  <el-input clear placeholder="Please input" v-model="input"></el-input>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="6">
                  <label for>Payment Term</label>
                  <el-input clear placeholder="Please input" v-model="input"></el-input>
                </el-col>

                <el-col :xs="12" :sm="12" :lg="12">
                  <label for>
                    Distination
                    <span>add new Destination</span>
                  </label>
                  <el-select v-model="value" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="12">
                  <label for>Distination License Number</label>
                  <el-select v-model="value" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :xs="24" :sm="12" :lg="8">
                  <label for>Point of Contact (POC) Name</label>
                  <el-input clear placeholder="Please input" v-model="input"></el-input>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="8">
                  <label for>Phone Number</label>
                  <el-input clear placeholder="Please input" v-model="input"></el-input>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="8">
                  <label for>Email</label>
                  <el-input clear placeholder="Please input" v-model="input"></el-input>
                </el-col>
                <el-col :span="24">
                  <label for>Diver / Delivery Notes</label>
                  <el-input type="textarea" :rows="8" placeholder="Please input" v-model="textarea"></el-input>
                </el-col>
                <el-col :span="24">
                  <label for>Diver / Delivery Notes</label>
                  <el-input type="textarea" :rows="8" placeholder="Please input" v-model="textarea"></el-input>
                </el-col>
                <el-col :span="24">
                  <label for>Diver / Delivery Notes</label>
                  <el-input type="textarea" :rows="8" placeholder="Please input" v-model="textarea"></el-input>
                </el-col>
                <el-col :span="24">
                  <label for>Diver / Delivery Notes</label>
                  <el-input type="textarea" :rows="8" placeholder="Please input" v-model="textarea"></el-input>
                </el-col>
              </el-row>
              <div class="action mt-3">
                <el-button type="primary">Submit</el-button>
                <el-button type>Cancel</el-button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  data () {
    return {
      scrollPosition: null,
      openDropDown: false,
      dropDownMenu: false,
      input: '',
      textarea: ''
    }
  },
  methods: {
    toggleDropDownMenu () {
      this.dropDownMenu = !this.dropDownMenu
    },

    hideDropDownMennu () {
      this.dropDownMenu = false
    },
    setMenu () {
      this.active = !this.active
      const sitebody = document.body
      this.active ? sitebody.classList.add('menu_callaped') : sitebody.classList.remove('menu_callaped')
    },
    setMenuMobile () {
      this.active = !this.active
      const sitebody = document.body
      this.active ? sitebody.classList.add('menu_mobile_callaped') : sitebody.classList.remove('menu_mobile_callaped')
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss" scoped>
.menu_callaped {
  .page-menu-inner {
    width: 80px;
    transition: 0.5s;
    .sh-link-wrapper {
      width: 80px;
      transition: 0.5s;
      ul {
        li {
          a {
            transition: 0.3s;
            span {
              display: none;
            }
            i {
              margin-right: 0;
              font-size: 1.8em;
              transition: 0.3s;
              position: relative;
              top: 2px;
            }
          }
          a:after {
            transition: 0.3s;
            position: absolute;
            right: 7px;
            top: 20px;
          }
        }
      }
    }
  }
}
.app-icon {
  width: 24px;
  .app-icon-inner {
    width: 18px;
    height: 18px;
    .app-icon-block {
      background: #666;
      width: 7px;
      height: 7px;
      display: block;
      padding: 0;
      float: left;
      margin: 1px;
    }
    .first {
      background: $yellow;
    }
  }
}
main .content {
  margin-left: 160px;
  transition: 0.5s;
}
.menu_callaped main .content {
  margin-left: 80px;
  transition: 0.5s;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.6em;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid\9;
  border-right: 4px solid rgba(0, 0, 0, 0);
  border-left: 4px solid rgba(0, 0, 0, 0);
}

.header_fixed {
  position: fixed;
  z-index: 1;
  transition: 0.9s;
}

.uk-dropdown {
  display: none;
  position: absolute;
  z-index: 1020;
  box-sizing: border-box;
  min-width: 200px;
  padding: 20px;
  background: #fff;
  color: #666;
  transition: 0.5s;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}
.uk-dropdown.uk-open {
  display: block;
}
.header .icon-browse {
  width: 220px;
  padding: 1.5rem 1rem;
  padding-bottom: 0;
  border-radius: 0;
  transition: 0.5s;
}
.header .icon-browse .icon-menu-item {
  width: 90px;
  display: inline-block;
  text-align: center;
  margin-bottom: 1.7rem;
  color: #969696;
  font-size: 13px;
  &:hover {
    color: $yellow;
  }
}
.header .icon-browse .icon-menu-item i {
  font-size: 28px;
  line-height: 42px;
  display: block;
}
.header .icon-browse .more-app {
  background: #f7f7f7;
  border-radius: 0 0 10px 10px;
  padding: 10px 0;
  text-align: center;
  color: #969696;
  width: 220px;
  display: inline-block;
  margin-bottom: 0;
  font-size: 14px;
  margin: 0 -15px;
  border-top: 1px solid #eaeaea;
}
.sidebar {
  z-index: 9;
  position: fixed;
  transition: 0.5s;
  .sh-link-wrapper {
    transition: 0.3s;
    height: calc(100% - 80px);
    overflow: auto;
    height: 100%;
    overflow: hidden scroll;
    ul {
      padding: 0;
      margin: 13px 0 0 0;
      li {
        display: block;
        transition: 0.3s;
        line-height: 25px;
        font-size: 14px;
        height: auto;
        a {
          color: #4b4b4b;
          display: flex;
          transition: 0.3s;
          cursor: pointer;
          position: relative;
          padding: 13px 25px;
          font-weight: 500;
          i {
            margin-right: 15px;
            width: 20px;
            font-size: 22px;
            color: var(--icon);
            transition: 0.3s;
            position: relative;
            top: 2px;
            display: inline-block;
            z-index: -1;
          }
          span {
            z-index: -1;
          }
        }
        a:after {
          font-family: 'Feather-Icons';
          content: '\e92e';
          opacity: 1;
          font-size: 16px;
          transition: 0.3s;
          line-height: 17px;
          width: 17px;
          height: 17px;
          color: #4b4b4b;
          display: inline-block;
          border-radius: 3px;
          margin-left: 7px;
          text-indent: 0;
          position: absolute;
          right: 25px;
          top: 19px;
        }
        a:only-child:after {
          content: '';
          display: none;
        }
        ul {
          padding: 0;
          margin: 0;
          visibility: hidden;
          max-height: 0;
          opacity: 0;
          line-height: 0;
          transition: 0.3s;
          pointer-events: none;
          display: none;
          li {
            background-color: transparent;
            border: none;
            padding-left: 63px;
            position: relative;
            margin: 0;
            a {
              padding: 9px 0 !important;
            }
            a:after {
              content: '';
              display: none;
            }
          }
          li:hover {
            background: none;
          }
        }
        ul:before {
          content: '';
          display: none;
        }
      }
      li.active-submenu ul {
        visibility: visible;
        padding: 0px 0 13px 0;
        line-height: 24px;
        opacity: 1;
        max-height: 220px;
        pointer-events: all;
        margin-top: 0 !important;
        padding-top: 0 !important;
        display: block;
      }
      li.active-submenu a:after {
        content: '\e931';
      }
      li:hover {
        background-color: rgba(102, 103, 107, 0.04);
        width: 100%;
      }
    }
    ul:before {
      content: attr(data-submenu-title);
      transition: 0.5s;
      padding: 0 20px;
      margin-bottom: 5px;
      display: block;
      color: var(--gray-soft);
      font-weight: 600;
      font-size: 15px;
    }
  }
}
.broadcum {
  ul {
    li {
      a {
        font-size: 0.875rem;
      }
    }
    li:before {
      font-family: 'Feather-Icons';
      content: '\e930';
      opacity: 1;
      font-size: 16px;
      transition: 0.3s;
      line-height: 17px;
      width: 17px;
      height: 17px;
      display: inline-block;
      border-radius: 3px;
      margin-left: 7px;
      margin-right: 7px;
      text-indent: 0;
      top: 3px;
      position: relative;
      color: #070707;
    }
    li:first-child:before {
      display: none;
    }
    li:last-child {
      color: #727272;
    }
  }
}
.w-160px {
  transition: 0.3s;
}
@media (max-width: 768px) {
  .sidebar {
    height: 60px;
    transition: 0.3s;
    .page-menu-inner {
      width: 70px;
      transition: 0.5s;
      .sh-link-wrapper {
        display: none;
        width: 70px;
        transition: 0.5s;
      }
    }
  }
  main .content {
    margin-left: 0px;
    transition: 0.5s;
  }

  .menu_mobile_callaped {
    .sidebar {
      height: 100vh;
      z-index: 9;
      position: fixed;
      .page-menu-inner {
        width: 70px;
        transition: 0.5s;
        display: block;
        .sh-link-wrapper {
          width: 70px;
          transition: 0.5s;
          display: block;
          ul {
            li {
              a {
                text-align: center;
                padding: 13px 20px;
                span {
                  display: none;
                }
                i {
                  margin-right: 0;
                  font-size: 1.8em;
                  width: 100%;
                  transition: 0.3s;
                  position: relative;
                  top: 2px;
                }
              }
              a:after {
                content: '';
                display: none;
              }
              ul {
                li {
                  border: none;
                  padding-left: 0px;
                  text-align: center;
                  margin: 0;
                  a {
                    font-size: 12px;
                    text-align: center;
                  }
                }
              }
            }
          }
          ul:before {
            content: attr(data-submenu-title);
            margin-bottom: 5px;
            display: block;
            color: $span_in_label;
            font-weight: bolder;
            font-size: 14px;
            text-align: center;
            margin-left: -2px;
          }
        }
      }
    }
    main .content {
      margin-left: 70px;
      transition: 0.5s;
    }
  }
}
</style>
