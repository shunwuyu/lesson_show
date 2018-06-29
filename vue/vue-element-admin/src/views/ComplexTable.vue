<template>
<div class="app-container">
  <div class="filter-container">
    <el-input style="width:200px;" class="filter-item" @keyup.enter.native="handleFilter" placeholder="标题" v-model="listQuery.title"></el-input>
    <el-select clearable style="width:90px" class="filter-item" v-model="listQuery.importance" placeholder="重要性">
      <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"></el-option>
    </el-select>
    <el-select style="width:140px" class="filter-item" v-model="listQuery.sort" @change="handleFilter">
      <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"></el-option>
    </el-select>
    <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">查询</el-button>
  </div>
  <el-table :key="tableKey" :data="list" v-loading="listLoading" border fit highlight-current-row style="width:100%;min-height:1000px">
    <el-table-column align="center" label="序号" width="65">
      <template slot-scope="scope">
        <span>{{scope.row.id}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="日期" width="150px">
      <template slot-scope="scope">
        <span>{{scope.row.timestamp}}</span>
      </template>
    </el-table-column>
    <el-table-column  label="标题" min-width="150px">
      <template slot-scope="scope">
        <span class="link-type">{{scope.row.title}}</span>
        <el-tag>{{scope.row.type}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column  label="作者" width="110px" align="center">
      <template slot-scope="scope">
        <span>{{scope.row.author}}</span>
      </template>
    </el-table-column>
    <el-table-column  label="阅读数" width="95" align="center">
      <template slot-scope="scope">
        <span v-if="scope.row.pageviews" class="link-type">{{scope.row.pageviews}}</span>
        <span v-else>0</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作" width="230"
    class-name="small-padding fixed-width">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
        <el-button  v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row, 'published')">发布</el-button>
        <el-button  v-if="scope.row.status!='draft'" size="mini" @click="handleModifyStatus(scope.row, 'draft')">草稿</el-button>
        <el-button  v-if="scope.row.status!='deleted'" size="mini" @type="danger" @click="handleModifyStatus(scope.row, 'deleted')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination-container">
    <el-pagination background :current-page="listQuery.page" :page-sizes="[10,20,30,50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total" @current-change="handleCurrentChange"
    @size-change="handleSizeChange">
    </el-pagination>
  </div>
  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
    <el-form :rules="rules"  ref="dataForm" :model="temp" label-position="left" label-width="70px" style="width:400px;margin-left: 50px;">
      <el-form-item prop="type" label="类型">
        <el-select class="filter-item" v-model="temp.type" placeholder="Please select">
          <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="temp.title"></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="timestamp">
        <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick to date"></el-date-picker>
      </el-form-item>
      <el-form-item label="状态">
        <el-select class="filter-item" v-model="temp.status" placeholder="Please select">
          <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="重要性">
        <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
      </el-form-item>
      <el-form-item label="评论">
        <el-input type="textarea" :autosize="{minRows: 2, maxRows: 4}" placeholder="Please input" v-model="temp.remark"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click='dialogFormVisible=false'>取消</el-button>
      <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">保存</el-button>
      <el-button v-else type="primary" @click="updateData">保存</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
import { fetchList } from '@/api/article'
const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]
export default {
  data () {
    return {
      statusOptions: ['published', 'draft', 'deleted'],
      calendarTypeOptions,
      tableKey: 0,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        type: undefined,
        sort: '+id',
        title: undefined
      },
      importanceOptions: [1, 2, 3],
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      rules: {
        type: [
          { 
            required: true,
            message: 'type is required',
            trigger: 'change'
          }
        ],
        timestamp: [{
          type: 'date',
          required:true,
          message: 'timestamp is required',
          trigger: 'change'
        }]
      },
      list: [],
      total: null,
      listLoading: false,
      dialogStatus: '',
      dialogFormVisible: false,
      textMap: {
        update: 'Edit',
        created: 'Create'
      }
    }
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus (row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    updateData () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp)
          for (const v of this.list) {
            if (v.id === this.temp.id) {
              const index = this.list.indexOf(v)
              this.list.splice(index, 1, this.temp)
              break
            }
          }
          this.dialogFormVisible = false
          this.$notify({
            title: '成功',
            message: '更新成功',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    handleUpdate (row) {
      this.temp = Object.assign({}, row)
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },  
    handleSizeChange (val) {
      this.listQuery.limit = val;
      this.getList()
    },
    handleCurrentChange (val) {
      // console.log(val);
      this.listQuery.page = val;
      this.getList()
    },
    handleFilter () {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        console.log(response.data);
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 1.5*1000)
      })
    }
  },
  created () {
    this.getList()
  }
}  
</script>
<style>

</style>
