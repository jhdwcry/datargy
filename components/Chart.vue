<script setup lang="ts">
const { data: chart } = await useFetch('http://127.0.0.1:8000/api/v1/data/chart/?data_type=dam_ua&end_date=01.01.2024&start_date=30.01.2024')
</script>

<template>
  <p>{{ chart }}</p>
</template>
