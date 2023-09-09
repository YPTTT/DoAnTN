.<template>
  <div class="container">
    <nav>
      <div class="header-admin">
        <img src="../../assets/logo-admin.png">
        <p>ADMIN</p>
      </div>
      <div class="dashboard">
        <i class="fa-solid fa-gauge-high fa-2xl" style="color: #fafafa;"></i>
        <p>Dashboard</p>
      </div>
      <div class="menu-admin">
      <a-menu mode="inline" :open-keys="openKeys" @openChange="onOpenChange" class="main-menu">
        <a-sub-menu class="name-list" key="sub1">
          <span slot="title"><a-icon type="mail" /><span>Quản lý tài khoản</span></span>
          <a-menu-item class="sub-menu" key="1">
            <p>Tài khoản</p>
          </a-menu-item>
          <a-menu-item class="sub-menu" key="2">
            <p>Thẻ thành viên</p>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu class="name-list" key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>Quản lý thông tin</span></span>
          <a-menu-item class="sub-menu" key="3">
            <p>Film</p>
          </a-menu-item>
          <a-menu-item class="sub-menu" key="4">
            <p>Rạp Film</p>
          </a-menu-item>
          <a-menu-item class="sub-menu" key="5">
            <p>Vé</p>
          </a-menu-item>
          <a-menu-item class="sub-menu" key="6">
            <p>Phòng chiếu</p>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu class="name-list" key="sub4">
          <span slot="title"><a-icon type="setting" /><span>Quản lý hóa đơn</span></span>
          <a-menu-item class="sub-menu" key="7">
            <p>Hóa đơn</p>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    </nav>
    <div class="sub-container">
        <header>
          <div class="profile">
            <p class="name-profile">Pham thi thu thuy</p>
            <img src="../../assets/avt-profile.jpg" class="avt-profile">
          </div>
      </header>
      <section></section>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: [''],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style scoped>
.container
{
  width: 100%;
  height: 100vh;
  display: flex;
}

.sub-container
{
  width: 85%;
  height: 100vh;
}

header
{
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

nav
{
  width: 15%;
  height: 100vh;
  background: #4e72df;
  padding: 0 1rem 0 1rem;
}

section
{
  width: 100%;
  height: 80vh;
  background: #e7e8ec;
}

footer
{
  width: 100%;
  height: 10vh;
  background: purple;
}

.profile
{
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 0 1rem;
  border-left: 1px solid black;
}

.profile .name-profile
{
  margin-top: 0.5rem;
}

.profile .avt-profile
{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  vertical-align: middle;
}
.header-admin
{
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.2px solid #ffffff;
  border-radius: 2px;
}
.header-admin img
{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
}
.header-admin p
{
  margin-top: 2rem;
  font-size: 26px;
  font-weight: bold;
  color: white;
}
.dashboard
{
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  border-bottom: 0.2px solid #ffffff;
  border-radius: 2px;
}
.dashboard i
{
  margin-right: 0.5rem;
}
.dashboard p
{
  margin-top: 1rem;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}
.menu-admin 
{
  margin-top: 0.5rem;
  width: 100%;
}
.main-menu
{
  width: 100%;
  border: none;
  background: #4e72df;
  color: #ffffff;
}
.name-list
{
  width: 100%;
  float: left;
  background: #4e72df;
  border-bottom: 1px solid #ffffff;
  border-radius: 2px;
}
.name-list span:first-child
{
  margin-left: -2rem;
}
.sub-menu
{
  border-bottom: 1px solid #4e72df;
  border-radius: 2px;
}
.sub-menu p
{
  width: 100%;
  display: flex;
  margin-left: -1rem;
}
</style>