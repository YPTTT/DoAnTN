.<template>
  <div class="container">
    <div class="sub-container">
        <div>
            <img src="../assets/logoVnPay.jpg"/>
        </div>
        <div class="infoPay">
            <div><i class="fa-regular fa-credit-card"></i><input placeholder="Số thẻ"/></div>
            <div><i class="fa-solid fa-id-card"></i><input placeholder="Tên chủ thẻ"/></div>
            <div><i class="fa-solid fa-id-card"></i><input placeholder="Nhập tên ngân hàng"/></div>
            <div></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "payPage",
}
</script>

<style scoped>
.sub-container
{
    width: 50%;
    margin: 4rem auto;
    border: 2px solid black;
    padding: 1rem;
}
.sub-container img
{
    width: 15%;
}
.sub-container>div:first-child
{
    width: 100%;
    height: 3rem;
}
</style>