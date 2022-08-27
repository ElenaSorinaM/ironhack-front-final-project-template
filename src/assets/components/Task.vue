<template>
  <div>
    <tr>
      <td class="border border-slate-700">{{ task.title }}</td>
      <td class="border border-slate-700">{{ task.isComplete }}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div class="text-center">
          <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
    props: {
        task: Object
    }
};
</script>

<style></style>
