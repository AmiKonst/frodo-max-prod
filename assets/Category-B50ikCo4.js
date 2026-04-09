import { D as Dictionary } from './Dictionary-D4ou_0z-.js';
import { _ as _sfc_main$1 } from './Ready-D_BX2OhE.js';
import { g as api, s as stores, r as reactive, c as createElementBlock, b as createBlock, d as createCommentVNode, e as createVNode, F as Fragment, f as openBlock } from './index-CtutUg8e.js';
import './ItemDetail-DSjKDDUO.js';
import './Tracks-DubQqdTK.js';
import './Block-C1qAF8sb.js';
import './TitleWithButtons-BIYa2up5.js';
import './EmptyLabel-DOcdzqbp.js';
import './Collage-BJ1iprn_.js';
import './Donate-CRgK5YRL.js';

const _sfc_main = {
  __name: 'Category',
  props: {
        code: { type: String }
    },
  setup(__props) {

    const dict = api.dict();
    stores.locale();


    const props = __props;

    const data = reactive({
        ready: false,
        type: null
    });

    const init = async () => {
        const types = await dict.getTypes();

        data.type = types.find(item => item.code === 'categories');
        data.ready = true;
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (data.ready)
      ? (openBlock(), createBlock(Dictionary, {
          key: 0,
          code: props.code,
          type: data.type
        }, null, 8, ["code", "type"]))
      : createCommentVNode("", true),
    createVNode(_sfc_main$1, {
      page: "category",
      init: init
    })
  ], 64))
}
}

};

export { _sfc_main as default };
//# sourceMappingURL=Category-B50ikCo4.js.map
