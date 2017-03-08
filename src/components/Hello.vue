<style>
    .k12-col {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    
    .k12-col {
        border-radius: 4px;
    }
    
    .bg-purple-dark {
        background: #99a9bf;
    }
    
    .bg-purple {
        background: #d3dce6;
    }
    
    .bg-purple-light {
        background: #e5e9f2;
    }
    
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>

<template>
<div>
  <k12-row>
    <k12-col :span="24"><div class="grid-content bg-purple-dark"></div></k12-col>
  </k12-row>
  <k12-row>
    <k12-col :span="12"><div class="grid-content bg-purple"></k12-col>
    <k12-col :span="12"><div class="grid-content bg-purple-light"></k12-col>
  </k12-row>
  <k12-row>
    <k12-col :span="8"><div class="grid-content bg-purple"></k12-col>
    <k12-col :span="8"><div class="grid-content bg-purple-light"></k12-col>
    <k12-col :span="8"><div class="grid-content bg-purple"></k12-col>    
  </k12-row>
  <k12-row :gutter="20">
    <k12-col :span="6" ><div class="grid-content bg-purple"></div></k12-col>
    <k12-col :span="6" ><div class="grid-content bg-purple"></div></k12-col>
    <k12-col :span="6" ><div class="grid-content bg-purple"></div></k12-col>
    <k12-col :span="6" ><div class="grid-content bg-purple"></div></k12-col>
  </k12-row>

  <k12-row :gutter="20">
    <k12-col :span="16"><div class="grid-content bg-purple"></k12-col>
    <k12-col :span="8"><div class="grid-content bg-purple"></k12-col>
  </k12-row>

  <k12-row>
    <k12-col :span="6"><div class="grid-content bg-purple"></k12-col>
    <k12-col :span="6" :offset="6"><div class="grid-content bg-purple"></k12-col>
  </k12-row>

  <k12-row>
    <k12-col :span="6" :offset="6">
      <k12-radio v-model="radio" label="1">选项一</k12-radio>
      <k12-radio v-model="radio" label="2">选项二</k12-radio>
      <k12-radio disabled v-model="radio1" label="禁用">备选项</k12-radio>
      <k12-radio disabled v-model="radio1" label="选中且禁用">备选项</k12-radio>


      <k12-radio-group v-model="radio2">
        <k12-radio :label="3">xuanxiang</k12-radio>
        <k12-radio :label="6">xuanxiang</k12-radio>
        <k12-radio :label="9">xuanxiang</k12-radio>
      </k12-radio-group>

      <k12-checkbox v-model="checked" >选项1</k12-checkbox>

      <k12-checkbox-group v-model="checkList">
        <k12-checkbox label="复选A"></k12-checkbox>
        <k12-checkbox label="复选B"></k12-checkbox>
        <k12-checkbox label="复选C"></k12-checkbox>
        <k12-checkbox label="禁用" disabled></k12-checkbox>
        <k12-checkbox label="选中禁用" disabled></k12-checkbox>
      </k12-checkbox-group>

      <k12-input placeholder="请输入内容" icon="magnifier" :on-icon-click="handleIconClick" v-model="input"></k12-input>
      <div>
              <k12-input placeholder="请输入内容" type="textarea"  :autosize="{ minRows: 2, maxRows: 4}"></k12-input>
      </div>
    </k12-col>
  </k12-row>
</div>
</template>

<script>
    import K12Button from '../../packages/button'
    import Row from '../../packages/row'
    import K12Col from '../../packages/col'
    import K12Radio from '../../packages/radio'
    import K12RadioGroup from '../../packages/radio-group'
    import K12Checkbox from '../../packages/checkbox'
    import K12CheckboxGroup from '../../packages/checkbox-group'
    import K12Input from '../../packages/input'

    export default {
        name: 'hello',
        components: {
            'k12-button': K12Button,
            'k12-col': K12Col,
            'k12-row': Row,
            'k12-radio': K12Radio,
            'k12-radio-group': K12RadioGroup,
            'k12-checkbox': K12Checkbox,
            'k12-checkbox-group': K12CheckboxGroup,
            'k12-input': K12Input
        },
        data() {
            return {
                radio: '1',
                radio1: '选中且禁用',
                radio2: '3',
                checked: true,
                checkList: ['选中禁用', '复选A'],
                input: '111111'
            }
        },
        methods: {
            handleIconClick(ev) {
                console.log(ev)
            }
        }
    }
</script>