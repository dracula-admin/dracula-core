<template>
  <div class="drac-checkbox" :class="{'drac-checkbox--error': error }">
    <input
      :id="id"
      :name="name"
      :disabled="disabled"
      :aria-disabled="disabled"
      type="checkbox"
      class="drac-checkbox__input"
    />
   <label :for="id" class="drac-checkbox__label">{{ label }}</label> 
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    error: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="stylus">
  .drac-checkbox {
    margin: 10px;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .drac-checkbox--error .drac-checkbox__label::before {
    border-color: var(--color-error);
  }

  .drac-checkbox--error .drac-checkbox__label {
    color: var(--color-error);
  }

  .drac-checkbox--error .drac-checkbox__input:checked ~ .drac-checkbox__label::before {
    background-color: var(--color-error);
  }

  .drac-checkbox__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .drac-checkbox__label {
    font-size: 16px;
    cursor: pointer;
  }

  .drac-checkbox__label::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 5px;
    background-color: var(--color-light);
    border: solid 1px var(--color-cornflower-blue);
  }

  .drac-checkbox__input:disabled ~ .drac-checkbox__label::before {
    background-color: var(--color-link-water);
    border-color: var(--color-periwinkle-gray);
  }

  .drac-checkbox__input:disabled ~ .drac-checkbox__label {
    color: var(--color-periwinkle-gray);
  }

  .drac-checkbox__input:disabled ~ .drac-checkbox__label {
    cursor: not-allowed;
  }

  .drac-checkbox__input:hover ~ .drac-checkbox__label::before {
    border-color: var(--color-cornflower-blue);
  }

  .drac-checkbox__input:checked ~ .drac-checkbox__label::before {
    background-color: var(--color-cornflower-blue);
  }

  .drac-checkbox__label:after {
    content: "";
    position: absolute;
    display: none;
  }

  .drac-checkbox__input:checked ~ .drac-checkbox__label:after {
    display: block;
  }

  .drac-checkbox .drac-checkbox__label:after {
    left: 6px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid var(--color-light);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>