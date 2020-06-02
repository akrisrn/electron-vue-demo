import 'vue-class-component/hooks';
import { RawLocation, Route } from 'vue-router';

declare module 'vue/types/vue' {
  // noinspection JSUnusedGlobalSymbols
  interface Vue {
    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void,
    ): void

    beforeRouteLeave?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void,
    ): void

    beforeRouteUpdate?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void,
    ): void
  }
}
