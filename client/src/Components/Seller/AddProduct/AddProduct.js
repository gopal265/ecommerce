import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <form>
  <div class="form-group">
    <label htmlFor="brand">Brand</label>
    <input type="text" class="form-control" id="product_brand" aria-describedby="brand" />
  </div>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" />
  </div>

  <div class="form-group">
    <label for="sellingprice">Selling Price</label>
    <input type="Number" class="form-control" id="sellingprice" />
  </div>

  <div class="form-group">
    <label for="mrp">MRP</label>
    <input type="Number" class="form-control" id="mrp" />
  </div>

  <div class="form-group">
    <label for="size">Size</label>
    <input type="text" class="form-control" id="size" />
  </div>

  <div class="form-group">
    <label for="points">Bullet Points</label>
    <input type="text" class="form-control" id="points" />
  </div>

  <div class="form-group">
    <label for="title">Bullet Points</label>
    <input type="text" class="form-control" id="title" />
  </div>

  <div class="form-group">
    <label for="details">Product details</label>
    <input type="text" class="form-control" id="details" />
  </div>

  <div class="form-group">
    <label for="material">Material</label>
    <input type="text" class="form-control" id="material" />
  </div>
  
  <div class="form-group">
    <label for="color">Color</label>
    <input type="text" class="form-control" id="color" />
  </div>

   
  <div class="form-group">
    <label for="image">Image</label>
    <input type="file" class="form-control" id="image" />
  </div>
  

  <div class="form-group">
    <label for="gender">Gender</label>
    <input type="text" class="form-control" id="gender" />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddProduct
