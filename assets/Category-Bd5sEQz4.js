import { D as Dictionary } from './Dictionary-Bd1Ho1f6.js';
import { _ as _sfc_main$1 } from './Ready-BDatkvxO.js';
import { g as api, s as stores, r as reactive, c as createElementBlock, b as createBlock, d as createCommentVNode, e as createVNode, F as Fragment, f as openBlock } from './index-DJ-g_R2z.js';
import './ItemDetail-DMKdBJp0.js';
import './Tracks-Ih-xBzI5.js';
import './Block-0d1yocTe.js';
import './TitleWithButtons-BaUjPzI_.js';
import './EmptyLabel-DCqYa3r5.js';
import './Collage-BEpce2R3.js';
import './Donate-hIEbJpPr.js';

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
//# sourceMappingURL=Category-Bd5sEQz4.js.map
