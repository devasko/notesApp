<template>
    <div class="wrapper">
      <div class="wrapper-content">
        <section>
          <div class="container">

              <h1>{{ title }}</h1>

                <!-- Вывод сообщений -->
              <message v-if="message" :message="message" />

              <!-- Новая заметка -->
              <newNote :note="note" @addNote="addNote" />

              <!-- Список заметок -->
              <notes :notes="notes"/>
          </div>
        </section>
      </div>
    </div>

</template>

<script>

    import message from '@/components/Message.vue';
    import newNote from '@/components/NewNote.vue';
    import notes from '@/components/Notes.vue';

    export default {
    data () {
        return {
            title: 'Заметки',
            message: null,

            note: {
                title: '',
                desc: '',
            },

            notes: [
                {
                    title: 'Первая заметка',
                    desc: 'Описание первой заметки',
                    date: new Date( Date.now() ).toLocaleString()
                },

                {
                    title: 'Вторая заметка',
                    desc: 'Описание второй заметки',
                    date: new Date( Date.now() ).toLocaleString()
                },

                {
                    title: 'Третья заметка',
                    desc: 'Описание третьей заметки',
                    date: new Date( Date.now() ).toLocaleString()
                },
            ]
        }
    },

    methods: {
        addNote () {
            let {title, desc, date} = this.note;

            if ( title === '' ) {
                this.message = 'Не заполнен заголовок или текст заметки.';
                return false;
            }

            this.notes.push({
                title,
                desc,
                date: new Date( Date.now() ).toLocaleString()
            });
            this.note.title = '';
            this.note.desc = '';
            this.message = '';
        }
    },

    components: {
        message,
        notes,
        newNote,
    }
}
</script>

<style>

</style>
