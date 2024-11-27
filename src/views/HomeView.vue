<script setup>

</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-5">
        <select class="form-select" id="" aria-label="default select example">
          <option selected>Select category</option>
          <option value="1">GPU</option>
          <option value="2">CPU</option>
          <option value="3">Motherboard</option>
          <option value="4">RAM</option>
        </select>
      </div>

      <div class="col-md-5">
        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">

      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-outline-danger" disabled>Reset</button>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">

    <div class="card-img-top mt-4" style="width: 18rem; top: 50px;">
      <a href="#"><img src="https://static.shop.kz/upload/resize_cache/iblock/065/gcgsznwq4suzskq5b9ri2x4mdaggx6sq/450_450_1/176279x3.webp" class="card-img-top" alt="Фото"></a>
      <div class="card-body">
        <h5 class="card-title">Gigabyte H510M K V2</h5>
        <p class="card-text">Motherboard</p>
        <p class="card-text">63$</p>
        <a href="#" class="btn btn-primary me-2">Add</a>
        <a href="#" class="btn btn-outline">Details</a>
      </div>
    </div>
  </div>

    <div class="col">
    <div class="card-img-top mt-4" style="width: 18rem; top: 50px;">
      <a href="#"><img src="https://static.shop.kz/upload/resize_cache/iblock/ddb/f5lg2lvl0ld7xkdr9ict2rqh43iy7e48/450_450_1/183165_02_2.webp" class="card-img-top" alt="Фото"></a>
      <div class="card-body">
        <h5 class="card-title">AMD Ryzen 9 9950X</h5>
        <p class="card-text">CPU</p>
        <p class="card-text">740$</p>
        <a href="#" class="btn btn-primary me-2">Add</a>
        <a href="#" class="btn btn-outline">Details</a>
      </div>
  </div>
    </div>
    <div class="col">
    <div class="card-img-top mt-4" style="width: 18rem; top: 50px;">
      <a href="#"><img src="https://c.dns-shop.kz/thumb/st1/fit/500/500/b6f56e24852bb3b1ffc4fe9ce4da69a3/291e3d866c55a4a55843d59380a9a2fe063f05290e8df4b95efb35ddf6b12e0b.jpg.webp" class="card-img-top" alt="Фото"></a>
      <div class="card-body">
        <h5 class="card-title">MSI GeForce GTX 1650</h5>
        <p class="card-text">GPU</p>
        <p class="card-text">440$</p>
        <a href="#" class="btn btn-primary me-2">Add</a>
        <a href="#" class="btn btn-outline">Details</a>
      </div>
  </div>
    </div>
    <div class="col">
    <div class="card-img-top mt-4" style="width: 18rem; top: 50px;">
      <a href="#"><img src="https://c.dns-shop.kz/thumb/st4/fit/500/500/7552b6341dea70a9dea9102b6c2609e8/93b717156b88cba868730da8338b1b4dcca873ec855fe4a603a5cf92e7489a5a.jpg.webp" class="card-img-top" alt="Фото"></a>
      <div class="card-body">
        <h5 class="card-title">Kingston FURY Beast Black </h5>
        <p class="card-text">RAM</p>
        <p class="card-text">100$</p>
        <a href="#" class="btn btn-primary me-2">Add</a>
        <a href="#" class="btn btn-outline">Details</a>
      </div>
  </div>
    </div>
  </div>
  </div>
</template>
