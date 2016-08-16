<template>
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div class="mdl-card mdl-cell mdl-cell--12-col">
            <div class="mdl-card__supporting-text">
                <h4>{{news.title}}</h4>
                <span class="mdl-chip mdl-chip--contact">
                    <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                       <i class="material-icons">account_circle</i>
                    </span>
                    <span class="mdl-chip__text">{{news.by}}</span>
                </span>
                <span class="mdl-chip mdl-chip--contact">
                    <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                        <i class="material-icons">label</i>
                    </span>
                    <span class="mdl-chip__text">{{news.type}}</span>
                </span>
                <span class="mdl-chip mdl-chip--contact">
                    <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                        <i class="material-icons">date_range</i>
                    </span>
                    <span class="mdl-chip__text">{{news.time | fromNow}}</span>
                </span>
                <!-- Number badge -->
                <span class="mdl-badge" data-badge="{{news.score}}">score</span>

            </div>
            <div class="mdl-card__actions">
                <a href="{{news.url}}" class="mdl-button">原文-></a>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    import Item from './Item.vue';
    import api from '../services/api/index';
    export default{
        name: 'NewsItem',
        props: {
            item: Number
        },
        data(){
            return {
                news: {}
            }
        },
        components: {
            Item
        },
        ready: function () {
            let vm = this;
            api.getNewsItemByid(vm.item).then(function (response) {
                vm.news = response.data;
            }, function (response) {
                console.log(response);
            });
        }
    }
</script>
