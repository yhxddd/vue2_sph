<template>
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
        <button v-if="startNumAndEnd.start > 1" @click="$emit('getPageNo', 1)">1</button>
        <button v-if="startNumAndEnd.start > 2">···</button>
        <template v-for="(page,index) in startNumAndEnd.end">
            <button :key="index"  v-if="startNumAndEnd.start <= page" :class="{active:pageNo == page}" @click="$emit('getPageNo', page)">{{page}}</button>
        </template>

        <button v-if="startNumAndEnd.end < totalPage - 1">···</button>
        <button v-if="startNumAndEnd.end < totalPage" @click="$emit('getPageNo', totalPage)">{{totalPage}}</button>
        <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props:['pageNo','pageSize','total','countinues'],
        computed:{
            // 计算总共多少页，向上取整
            totalPage(){
                return Math.ceil(this.total/this.pageSize);
            },
            // 计算连续页码的起始和结束页码    连续页码至少5页
            startNumAndEnd(){
                const {countinues, pageNo, totalPage} = this;
                let start = 0, end = 0;
                if(countinues > totalPage){
                    // 连续页码数大于总页数
                    start = 1;
                    end = totalPage;
                }else{
                    start = pageNo - parseInt(countinues / 2);
                    end = pageNo + parseInt(countinues / 2)
                    // start为0为负数
                    if(start < 1){
                        start = 1
                        end = countinues;
                    }
                    if(end > totalPage){
                        start = pageNo - countinues + 1;
                        end = totalPage;
                    }
                }
                return {start, end};
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align:center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
    .active{
        background-color:skyblue;
    }
</style>