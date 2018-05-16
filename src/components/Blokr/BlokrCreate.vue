<template>
  <v-dialog max-width="500px">
    <v-card class="elevation-6">
               <v-card-text>
                  <v-form>
                     <v-text-field 
                        :rules="[(v) => v.length <= 30 || 'Max 30 characters']"
                        :counter="30"
                        v-model="blok.title"
                        label="Title"
                     >
                     </v-text-field>
                     <v-select
                        :items="items"
                        v-model="blok.priority"
                        label="Select Priority"
                        single-line
                     >
                     </v-select>
                     <v-text-field
                        v-model="blok.comment"
                        name="comment"
                        label="Add a Comment"
                        multi-line
                     >
                     </v-text-field>
                     <v-menu
                      ref="menu1"
                      :close-on-content-click="false"
                      v-model="due"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="290px"
                      min-width="290px"
                     >
                    <v-text-field
                      slot="activator"
                      v-model="dateFormatted"
                      label="Due Date"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      prepend-icon="event"
                      @blur="date = parseDate(dateFormatted)"
                    >
                    </v-text-field>
                    <v-date-picker v-model="date" no-title @input="due = false"></v-date-picker>
                    </v-menu>
                  </v-form>
                  <v-btn
                    round
                    block
                    type="submit"
                    @click="createBlok"
                    color="primary"
                    :loading="loading"
                    :disabled="loading">
                    Submit
                  </v-btn>
               </v-card-text>
            </v-card>
  </v-dialog>
</template>

<script>
export default {
   data() {
      return {
        blok: {
          title: '',
          comment: '',
          priority: '',
        },
        date: null,
        dateFormatted: null,
        due: false,
        created: null,
        items: [
          { text: 'Critical' },
          { text: 'High' },
          { text: 'Medium' },
          { text: 'Low' },
        ]
      }
   },
   computed: {
      computedDateFormatted(){
         return this.formatDate(this.date)
      },
      loading() {
        return this.$store.getters.loading
      }
   },
   watch: {
      date(val) {
        this.dateFormatted = this.formatDate(this.date)
      }
   },
   methods: {
    createBlok() {
      this.created = new Date()
      this.$store.dispatch('createBlokr', { 
        title: this.blok.title, 
        priority: this.blok.priority.text,
        comment: this.blok.comment,
        date: this.date,
        created: this.created,
      })
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
   }
}
</script>

<style>

</style>
