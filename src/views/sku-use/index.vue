<template>
  <div>
    <div>多级</div>
    <div class="sku-wrap">
      <div v-for="item in skuTree" :key="item.k_s">
        {{ item.k }}:
        <span
          v-for="chi in item.v"
          :key="chi.id"
          style="marginRight: 10px"
          :class="[
            {
              'disabled-btn': !disabldeSku({
                key: item.k_s,
                valueId: chi.id
              })
            },
            {
              'active-btn': selectedSku[item.k_s] === chi.id
            }
          ]"
          @click="onSelect({ skuValue: chi, skuKeyStr: item.k_s })"
        >
          {{ chi.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      goodsId: '',
      // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      skuTree: [
        {
          // skuKeyName：规格类目名称
          k: '颜色',
          // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          k_s: 's1',
          v: [
            {
              // skuValueId：规格值 id
              id: '1',
              // skuValueName：规格值名称
              name: '红色',
              // 规格类目图片，只有第一个规格类目可以定义图片
              imgUrl: 'https://img01.yzcdn.cn/1.jpg',
              // 用于预览显示的规格类目图片
              previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg'
            },
            {
              id: '2',
              name: '蓝色',
              imgUrl: 'https://img01.yzcdn.cn/2.jpg',
              previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg'
            }
          ],
          //  是否展示大图模式
          largeImageMode: true
        },
        {
          // skuKeyName：规格类目名称
          k: '大小',
          // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          k_s: 's2',
          v: [
            {
              // skuValueId：规格值 id
              id: '3',
              // skuValueName：规格值名称
              name: '大',
              // 规格类目图片，只有第一个规格类目可以定义图片
              imgUrl: 'https://img01.yzcdn.cn/1.jpg',
              // 用于预览显示的规格类目图片
              previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg'
            },
            {
              id: '4',
              name: '小',
              imgUrl: 'https://img01.yzcdn.cn/2.jpg',
              previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg'
            }
          ],
          //  是否展示大图模式
          largeImageMode: true
        },
        {
          // skuKeyName：规格类目名称
          k: '尺寸',
          // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          k_s: 's3',
          v: [
            {
              // skuValueId：规格值 id
              id: '1',
              // skuValueName：规格值名称
              name: '7'
            },
            {
              // skuValueId：规格值 id
              id: '2',
              // skuValueName：规格值名称
              name: '10'
            }
          ]
        },
        {
          // skuKeyName：规格类目名称
          k: 'abd',
          // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          k_s: 's4',
          v: [
            {
              // skuValueId：规格值 id
              id: '1',
              // skuValueName：规格值名称
              name: '7dd'
            },
            {
              // skuValueId：规格值 id
              id: '2',
              // skuValueName：规格值名称
              name: '10aa'
            }
          ]
        }
      ],
      skuList: [
        {
          // skuId
          id: 2259,
          // 规格类目 k_s 为 s1 的对应规格值 id
          s1: '1',
          // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '3',
          // 价格（单位分）
          price: 100,
          // 当前 sku 组合对应的库存
          stock_num: 110
        },
        {
          // skuId
          id: 2259,
          // 规格类目 k_s 为 s1 的对应规格值 id
          s1: '1',
          // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '4',
          // 价格（单位分）
          price: 100,
          // 当前 sku 组合对应的库存
          stock_num: 110
        },
        {
          // skuId
          id: 2259,
          // 规格类目 k_s 为 s1 的对应规格值 id
          s1: '2',
          // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '4',
          // 价格（单位分）
          price: 100,
          // 当前 sku 组合对应的库存
          stock_num: 110
        },
        {
          // skuId
          id: 2259,
          // 规格类目 k_s 为 s1 的对应规格值 id
          s1: '1',
          // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '3',
          s3: '1',
          // 价格（单位分）
          price: 100,
          // 当前 sku 组合对应的库存
          stock_num: 110
        },
        {
          // skuId
          id: 2259,
          // 规格类目 k_s 为 s1 的对应规格值 id
          s1: '1',
          // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '3',
          s3: '1',
          s4: '1',
          // 价格（单位分）
          price: 100,
          // 当前 sku 组合对应的库存
          stock_num: 110
        }
      ],
      selectedSku: {}
    }
  },
  computed: {
    disabldeSku() {
      return v => {
        return this.isSkuChoosable(this.skuList, this.selectedSku, v)
      }
    }
  },
  created() {
    // this.getGoods()
    this.resetSelectedSku()
  },
  methods: {
    // async getGoods() {
    //   // const params = { id: 1169 }
    //   const params = { id: '146' }
    //   const goodsData = await reqGoodsInfo(params)
    //   const { result } = goodsData
    //   const { goods } = result
    //   const { options, skus } = goods
    //   console.log('options', options)
    //   this.skuTree = options.list.map(item => {
    //     return {
    //       k: item.key,
    //       k_s: item.key,
    //       v: item.values.map(chi => {
    //         return { id: chi, name: chi }
    //       })
    //     }
    //   })
    //   this.skuList = skus.map(item => {
    //     const { id, options, totalStockNum } = item
    //     const list = options.list
    //     const skuO = {}
    //     list.forEach(s => {
    //       skuO[s.key] = s.value
    //     })
    //     console.log('skuO', skuO)
    //     return { id, stock_num: totalStockNum, ...skuO }
    //   })
    //   console.log('this.sk', this.skuTree)
    // },
    resetSelectedSku() {
      this.selectedSku = {}

      // 重置 selectedSku
      this.skuTree.forEach(item => {
        this.selectedSku[item.k_s] = ''
      })
    },
    // 判断sku是否可选
    isSkuChoosable(skuList, selectedSku, skuToChoose) {
      console.log('dddddddddddd------------')
      console.log('skuList', skuList)
      console.log('selectedSku', selectedSku)
      console.log('skuToChoose', skuToChoose)
      const { key, valueId } = skuToChoose

      // 先假设sku已选中，拼入已选中sku对象中
      const matchedSku = {
        ...selectedSku,
        [key]: valueId
      }

      // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中
      const skusToCheck = Object.keys(matchedSku).filter(skuKey => matchedSku[skuKey] !== '')
      const filteredSku = skuList.filter(sku =>
        skusToCheck.every(skuKey => String(matchedSku[skuKey]) === String(sku[skuKey]))
      )
      const stock = filteredSku.reduce((total, sku) => {
        total += sku.stock_num
        return total
      }, 0)
      return stock > 0
    },
    onSelect({ skuValue, skuKeyStr }) {
      // 选择时调用
      if (
        this.disabldeSku({
          key: skuKeyStr,
          valueId: skuValue.id
        })
      ) {
        console.log(skuValue, 'skuvalue')
        if (this.selectedSku[skuKeyStr] === skuValue.id) {
          this.selectedSku = {
            ...this.selectedSku,
            [skuKeyStr]: ''
          }
        } else {
          this.selectedSku = { ...this.selectedSku, [skuKeyStr]: skuValue.id }
        }
        console.log('this.selectedSku', this.selectedSku)
      }
    }
  }
}
</script>

<style>
.disabled-btn {
  color: #ccc;
  background-color: #fff;
}
span {
  display: inline-block;
  color: red;
  padding: 10px;
  border: 1px solid #ccc;
}
.active-btn {
  color: blue;
}
</style>
