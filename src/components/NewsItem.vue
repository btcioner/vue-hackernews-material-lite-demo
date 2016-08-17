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
                <br>
                <!-- Number badge -->

            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="{{news.url}}">
                    原文
                </a>
                <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" style="float: right">
                    <span class="mdl-badge" data-badge="{{news.score}}" ><i class="material-icons">grade</i></span>
                </button>
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
