<template>
  <div class="room-card">
    <div class="room-img">
      <a class="stretched-link" :href="`#/room/${room.id}`"><img :src="room.imageUrl" alt="" /></a>
    </div>
    <div class="position-relative">
      <div class="card-body card-title-container">
        <div class="card-title fs-7 mb-0">{{ room.name }}</div>
      </div>
      <div class="card-body card-content-container">
        <div class="card-content">
          <span class="fs-5">NT.{{room.normalDayPrice}} <span class="fs-7">平日</span></span>
          <span class="fs-7 text-muted">NT.{{room.holidayPrice}} 假日</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.room-card {
  height: 350px;
  width: 300px;
  position: relative;
  background-color: #f7f7f7;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  .room-img {
    height: 280px;
    width: 100%;
    overflow: hidden;
  }
  .room-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .card-body {
    height: 70px;
    width: 100%;
    position: absolute;
    // background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 100;
  }
  .card-content {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
  }
  .card-title-container {
    transition: all 0.3s;
  }
  .card-content-container {
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover .card-title-container {
    transform: translateY(-65px);
    background-color: #f7f7f7;
  }
  &:hover .card-content-container {
    opacity: 1;
  }
}
</style>
