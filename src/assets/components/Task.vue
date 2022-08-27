<template>
  
    <tr class="border-b">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ task.title }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ task.is_complete }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
         <span class="fa fa-pen te"></span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <span class="fa fa-trash"></span>
      </td>
    </tr>
  
</template>

<script>
export default {
    props: {
        task: Object
    }
};
</script>

<style></style>
