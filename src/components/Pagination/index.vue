<template>
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
        <!-- 1在起始页码为1、2时不展示（走下面循环流程），大于2时需要展示出来1   
             ... 在起始页码为3时开始展示  -->
        <button v-if="startNumAndEnd.start > 1" @click="$emit('getPageNo', 1)">1</button>
        <button v-if="startNumAndEnd.start > 2">···</button>
        <!-- 循环区间为start 到 end  起始的控制由startNumAndEnd.start <= page 控制 -->
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
                const {countinues, totalPage, pageNo} = this;
                let start = 0, end = 0;
                // 连续页数比总页数多
                if(countinues > totalPage){
                    start = 1;
                    end = totalPage;
                }else{
                    start = pageNo - parseInt(countinues / 2);
                    end = pageNo + parseInt(countinues / 2);
                    // 如果start为0 或负数，即当前页为第一页第二页时
                    if(start < 1){
                        start = 1;
                        end = countinues;
                    }
                    // 结束页码多于总页数
                    if(end > totalPage){
                        end = totalPage;
                        start = totalPage - countinues + 1;
                    }
                }
                return {start, end}
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