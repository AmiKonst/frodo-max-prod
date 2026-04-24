import { D as Dictionary } from './Dictionary-D474RO4y.js';
import { _ as _sfc_main$1 } from './Ready-s_qxctkp.js';
import { g as api, s as stores, r as reactive, c as createElementBlock, b as createBlock, d as createCommentVNode, e as createVNode, F as Fragment, f as openBlock } from './index-h-b34pYs.js';
import './ItemDetail-DKnk5EJC.js';
import './Tracks-BCOm2Abg.js';
import './Block-CSe4bZXj.js';
import './TitleWithButtons-DUJj9tqa.js';
import './EmptyLabel-QAJIlneQ.js';
import './Donate-CVrrBuBH.js';

const _sfc_main = {
  __name: 'Genre',
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

        data.type = types.find(item => item.code === 'genres');
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
      page: "mood",
      init: init
    })
  ], 64))
}
}

};

export { _sfc_main as default };
//# sourceMappingURL=Genre-CaecYHp7.js.map
