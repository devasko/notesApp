<template>

    <!-- Новая заметка -->
    <div class="new_note">
        <label for="title">Заголовок заметки</label>
        <input type="text" id="title" v-model="note.title" placeholder="Введите заголовок заметки">

        <label for="text">Текст заметки</label>
        <textarea id="text" v-model="note.desc" placeholder="Введите текст заметки"></textarea>

        <button type="submit" class="btn btnPrimary" @click="addNote">Добавить заметку</button>
    </div>
</template>

<script>
    export default {
        props: {
            note: {
                type: Object,
                require: true
            }
        },

        methods: {
            addNote () {
                this.$emit( 'addNote', this.note )
            }
        }
    }
</script>

<style lang="scss" scoped>

    .new_note {
        text-align: center;
    }

    .btn {
        margin-top: 25px;
    }

</style>