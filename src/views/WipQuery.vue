<template>
  <form method="">
    <div id="select_container" class="d-flex justify-content-center align-items-center">
      <div class="col-md-6 mt-3 p-2">
        <label for="work_order">
          <div class="label_select">Select work order</div>
        </label>
        <select name="work_order" id="work_order" multiple>
          <option v-for="work_order in work_orders" :value="work_order.value">{{ work_order.name }}</option>      
        </select>
      </div>
      <div class="col-md-6 mt-3 p-2">
        <label for="group_name">
          <div class="label_select">Select group name</div>
        </label>
        <select name="group_name" id="group_name" class="form-select p-2">
          <option disabled selected value> -- select an option -- </option>
          <option v-for="group_name in group_names" :value="group_name.value">{{ group_name.name }}</option>
        </select>   
      </div>
    </div>
    <div class="p-1">
      <button type="submit" class="btn btn-primary m-1" @click="callApi">Query <i class="bi bi-database-fill-check"></i></button>
      <button class="btn btn-success" @click="exportExcel">Export Excel <i class="bi bi-file-earmark-spreadsheet-fill"></i></button>
      <button class="btn btn-danger m-1" @click="clearButton">Clear <i class="bi bi-x-circle-fill"></i></button>
    </div>
  </form>
  <div class="p-2 label_select">RESULT:</div>
  <div class="col-md-12 table_container mt-3">
    <table class="table table-striped table-bordered table-hover table-primary table-responsive custom-width">
      <thead>
        <tr>
          <th>CURRENT_STATION</th>
          <th>MODEL_NAME</th>
          <th>MO_NUMBER</th>
          <th>SERIAL_NUMBER</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in results" :key="index">
          <td>{{ item.CURRENT_STATION }}</td>
          <td>{{ item.MODEL_NAME }}</td>
          <td>{{ item.MO_NUMBER }}</td>
          <td>{{ item.SERIAL_NUMBER }}</td>
        </tr>
      </tbody>
    </table>
    <nav class="d-flex justify-content-center" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="previousPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import exportFromJSON from "export-from-json";
export default {
  name: 'WipQuery',
  data() {
    return {
      limit: 5,
      page: 1,
      work_orders: [
      { name: '1002991-VYJ105', value: '1002991-VYJ105' },
        { name: 'Two', value: 'B' },
        { name: 'Three', value: 'C' },
        { name: 'Four', value: 'D' },
        { name: 'Five', value: 'E' },
        { name: 'Six', value: 'F' },
        { name: 'Seven', value: 'G' },
        { name: 'Eight', value: 'H' },
        { name: 'Nine', value: 'I' },
        { name: 'Ten', value: 'J' },
      ],
      group_names: [
        { name: 'AOI1-B', value: 'AOI1-B' },
        { name: 'Two', value: 'B' },
        { name: 'Three', value: 'C' },
        { name: 'Four', value: 'D' },
        { name: 'Five', value: 'E' },
        { name: 'Six', value: 'F' },
        { name: 'Seven', value: 'G' },
        { name: 'Eight', value: 'H' },
        { name: 'Nine', value: 'I' },
        { name: 'Ten', value: 'J' },
      ],
      allResults: [],
      results: [],
    };
  },
  mounted() {
    new MultiSelectTag('work_order')
  },
  methods: {
    callApi(event) {
      event.preventDefault();
      const data = {
        mo: document.getElementById('work_order').value,
        group_name: document.getElementById('group_name').value,
      };
      fetch('http://10.52.201.58:8000/wip_status/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        this.allResults = data;
        this.page = 1;
        this.updateResults();
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
    nextPage() {
      if (this.page < Math.ceil(this.allResults.length / this.limit)) {
        this.page += 1;
        this.updateResults();
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.updateResults();
      }
    },
    updateResults() {
      const start = (this.page - 1) * this.limit;
      const end = start + this.limit;
      this.results = this.allResults.slice(start, end);
    },
    exportExcel(event){
      event.preventDefault();
      const data = this.allResults;
      const fileName = "result_wip_query";
      const exportType = exportFromJSON.types.csv;
      if (data) exportFromJSON({ data, fileName, exportType });
    },
    clearButton() {
      document.getElementById("work_order").value = "";
      document.getElementById("group_name").value = "";
    },
    pageNumber(){
      let pageNumber = Math.ceil(this.allResults.length / this.limit);
      return pageNumber;
    }
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.drawer, .rounded, .drawer .input-body .input, .form-select{
  border: 1px solid rgb(150, 148, 148)!important;
}
.input-container{
  border-right: 1px solid rgb(150, 148, 148)!important;
}
.label_select{
  font-size: 18px;
  font-weight: bold;
  color: #2b52c9;
}
.table_container{
  width: 100%;
  overflow-x: auto;
}
table{
  width: 100%;
  border-collapse: collapse;
}
</style>