<template>
    <!-- Список заметок -->
    <div class="notes">
        <div class="note" v-for="(note, index) in notes" :key="index">
            <div class="note__header">
                <h3>{{ note.title }}</h3>
            </div>

            <div class="note__body">
                <p>{{ note.desc }}</p>
            </div>

            <div class="note__footer">
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            notes: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notes {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 40px 0;
    }

    .note {
        flex-basis: 49%;
        text-align: center;
        padding: 20px 30px;
        margin-bottom: 30px;
        background-color: #fff;
    }

    .note__header {
        color: #494ce8;
        font-size: 20px;
        font-weight: 600;
    }

    .note__body {
        margin: 20px 0;
    }

    .note__footer {
        font-size: 14px;
        color:#999;
    }
</style>