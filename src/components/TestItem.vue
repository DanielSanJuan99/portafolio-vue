<template>
  <div class="item">
    <i>
      <slot name="coso"></slot>
    </i>
    <div class="detallito">
      <h5>
        <slot name="titulito"></slot>
      </h5>
      <p style="text-align: justify; font-size: 25px; color: #00cc00">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
