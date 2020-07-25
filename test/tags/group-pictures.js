'use strict';

require('chai').should();
const Hexo = require('../hexo');
const hexo = new Hexo();

describe('group-pictures', () => {
  const groupPicture = require('../../scripts/tags/group-pictures')(hexo);

  it('layout 3-1', () => {
    groupPicture(['3-1'], `
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)`).should.eql('<div class="group-picture"><div class="group-picture-row"><div class="group-picture-column" style="width: 33.333333333333336%;"><img src="/images/docs/next.svg"></div><div class="group-picture-column" style="width: 33.333333333333336%;"><img src="/images/docs/next.svg"></div><div class="group-picture-column" style="width: 33.333333333333336%;"><img src="/images/docs/next.svg"></div></div></div>');
  });

  it('layout 5-2', () => {
    groupPicture(['5-2'], `
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)`).should.eql('<div class="group-picture"><div class="group-picture-row"><div class="group-picture-column" style="width: 50%;"><img src="/images/docs/next.svg"></div><div class="group-picture-column" style="width: 50%;"><img src="/images/docs/next.svg"></div></div><div class="group-picture-row"><div class="group-picture-column" style="width: 100%;"><img src="/images/docs/next.svg"></div></div><div class="group-picture-row"><div class="group-picture-column" style="width: 50%;"><img src="/images/docs/next.svg"></div><div class="group-picture-column" style="width: 50%;"><img src="/images/docs/next.svg"></div></div></div>');
  });

  it('no layout', () => {
    groupPicture(['NaN-NaN'], `
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)
![](/images/docs/next.svg)`).should.eql('<div class="group-picture"><div class="group-picture-row"><div class="group-picture-column" style="width: 33.333333333333336%;"><img src="/images/docs/next.svg"></div><div class="group-picture-column" style="width: 33.333333333333336%;"><img src="/images/docs/next.svg"></div><div class="group-picture-column" style="width: 33.333333333333336%;"><img src="/images/docs/next.svg"></div></div><div class="group-picture-row"><div class="group-picture-column" style="width: 50%;"><img src="/images/docs/next.svg"></div><div class="group-picture-column" style="width: 50%;"><img src="/images/docs/next.svg"></div></div></div>');
  });
});
