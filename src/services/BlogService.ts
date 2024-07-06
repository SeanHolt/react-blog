import { BlogItem } from "../components";

interface Comment {
  profile?: Profile;
  id: number;
  title: string;
  profileId: number;
  blogId: number;
}
interface Profile {
  id?: number;
  name?: string;
}
const allData: { blogs: BlogItem[]; comments: Comment[]; profiles: Profile[] } =
  {
    blogs: [
      {
        profile: {},
        id: 1,
        title: "First Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 2,
        title: "Second Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 3,
        title: "Third Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 4,
        title: "Fourth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 5,
        title: "Fifth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 6,
        title: "Sixth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 7,
        title: "Seventh Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 8,
        title: "Eighth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 9,
        title: "Ninth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 10,
        title: "Tenth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 11,
        title: "Eleventh Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 12,
        title: "Twelth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 13,
        title: "Thirteenth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 14,
        title: "Fourteenth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
      {
        profile: {},
        id: 15,
        title: "Fifteenth Blog Post",
        profileId: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper varius felis, eget tempus eros condimentum at. Nullam ut nibh non ante ornare varius. Mauris consequat nunc massa, in vestibulum felis elementum vel. Sed finibus, mauris eu tincidunt condimentum, nisl ligula dignissim risus, id dictum nulla dolor sed ante. Curabitur malesuada congue libero id maximus. Praesent sit amet diam ligula. Donec imperdiet ex eget elit vestibulum, eget rutrum ante euismod. Quisque suscipit condimentum dolor ac imperdiet. Nunc dolor eros, ultrices a viverra fermentum, auctor eget libero. Donec vitae ornare mauris. Morbi ac accumsan erat, et vulputate tortor. Ut malesuada iaculis sapien varius malesuada. Aliquam iaculis mi in ligula consectetur consequat. Fusce libero arcu, congue nec nisl a, mollis congue sem. Nulla quis odio et lectus pretium tristique. Sed sollicitudin nec quam ac cursus. In blandit scelerisque tellus. Maecenas aliquam enim et efficitur vestibulum. Maecenas semper erat nisi, at luctus velit feugiat a. Curabitur venenatis eget arcu et aliquet. Cras accumsan mauris sed quam dictum, vitae iaculis purus elementum. Proin placerat dictum lacus, a sollicitudin ligula tristique sit amet. Maecenas ac aliquam nisl. Suspendisse semper suscipit lacus, et pharetra lacus volutpat eget. Mauris hendrerit dui mauris. Cras consectetur erat sed pulvinar luctus. Proin mauris lectus, dapibus non magna pellentesque, accumsan gravida tortor. Phasellus sed metus quis enim consectetur eleifend. Nullam at tristique tellus, at vulputate sem. Donec sed aliquet nunc. Etiam vestibulum massa neque, ut ultrices augue varius ut. Quisque molestie mauris a finibus laoreet. Sed et mi ut ligula rutrum consequat. Maecenas eu ipsum vitae dui consectetur ullamcorper. Duis a ipsum mauris. Integer sagittis sem sed facilisis ultrices. Pellentesque eget luctus nisi, a tempor ex. Praesent felis elit, fringilla et felis vitae, varius lobortis ipsum. Suspendisse tempus mollis ligula, id congue mi suscipit quis. Suspendisse auctor malesuada feugiat. Duis at tristique purus. Etiam a tristique odio, at ornare elit. Nulla varius, justo sed condimentum consequat, lacus dui mattis erat, non laoreet tellus quam vitae eros. Donec pulvinar nisi nulla, dapibus mollis ex tempus tempor. Praesent scelerisque urna non metus consectetur ullamcorper. In hac habitasse platea dictumst. Nulla nisi justo, elementum nec semper ac, laoreet nec nisi. Vivamus rhoncus dui et mattis ultrices. Vivamus ut accumsan urna, id accumsan ex. Nullam tristique est a venenatis tristique. Cras urna dui, mattis eget porttitor id, facilisis cursus ligula. In non consectetur mauris. Aliquam libero ex, venenatis faucibus facilisis eu, rhoncus consequat dolor. In ut dolor mi. Suspendisse potenti. Curabitur aliquet auctor odio, at ullamcorper neque laoreet quis. Morbi sagittis ex porttitor, vulputate magna in, ornare ligula. In cursus venenatis maximus. Ut efficitur elementum vestibulum. Vivamus ornare sagittis quam ac porta. Vivamus sed libero commodo lectus aliquet laoreet. Donec blandit suscipit ullamcorper.",
      },
    ],
    comments: [
      {
        profile: {},
        id: 1,
        title: "This is my comment",
        profileId: 1,
        blogId: 1,
      },
    ],
    profiles: [{ id: 1, name: "Mordist" }],
  };
class BlogDataService {
  commentsCache: any[] = [];
  blogCache: any[] = [];
  allBlogCache: BlogItem[][] = [];
  profilesCache: any[] = [];

  async getAll(
    perPage: number = 10,
    currentPage: number = 1,
    totalBlogs: number = 15
  ) {
    if (allData.blogs) {
      for (let i = 0; i < allData.blogs.length; i++) {
        if (this.profilesCache[allData.blogs[i].profileId]) {
          allData.blogs[i].profile =
            this.profilesCache[allData.blogs[i].profileId];
        } else {
          allData.blogs[i].profile = (await this.getProfileById(
            allData.blogs[i].profileId
          )) as { id: number; name: string };
        }
      }
      const start = Math.max(0, perPage * currentPage - perPage);
      return allData.blogs.slice(start, perPage + start);
    }
    if (
      this.allBlogCache[currentPage] &&
      this.allBlogCache[currentPage][perPage]
    )
      return this.allBlogCache[currentPage][perPage];
    const url = `http://localhost:3001/blogs?_page=${currentPage}&_limit=${perPage}&_expand=profile`;
    return await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((response) => {
        if (!Array.isArray(this.allBlogCache[currentPage]))
          this.allBlogCache[currentPage] = [];
        this.allBlogCache[currentPage][perPage] = response;
        return response;
      });
  }
  async getOne(id: string) {
    if (allData.blogs) {
      for (let i = 0; i < allData.blogs.length; i++) {
        if (allData.blogs[i].id === parseInt(id)) {
          return [allData.blogs[i]];
        }
      }
      return [allData.blogs[0]];
    }
    if (this.blogCache[parseInt(id)]) return [this.blogCache[parseInt(id)]];
    return await fetch(
      "http://localhost:3001/blogs/" + id + "?_embed=profile",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((response) => {
        this.blogCache[parseInt(id)] = response;
        return [response];
      });
  }
  async getProfileById(id: number) {
    if (this.profilesCache[id]) return this.profilesCache[id];
    if (allData.profiles) {
      for (let i = 0; i < allData.profiles.length; i++) {
        if (allData.profiles[i].id === id) {
          this.profilesCache[id] = allData.profiles[i];
          return allData.profiles[i];
        }
      }
      return allData.profiles[0];
    }
  }
  async getByProfileId(id: number, currentPage: number, perPage: number) {
    if (allData.blogs) {
      let results = [];
      for (let i = 0; i < allData.blogs.length; i++) {
        if (allData.blogs[i].profileId === id) {
          results.push(allData.blogs[i]);
        }
      }
      const start = Math.max(0, perPage * currentPage - perPage);
      return results.slice(start, perPage + start);
    }
    if (allData.profiles) return allData.profiles[0];
    return await fetch(
      `http://localhost:3001/blogs?profileId=${id}&_expand=profile`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
  }
  async getProfiles() {
    return await fetch("http://localhost:3001/profiles")
      .then((response) => response.json())
      .then((response) => response);
  }
  async getCommentsByBlog(id: number) {
    if (allData.comments) {
      let results = [];
      for (let i = 0; i < allData.comments.length; i++) {
        if (allData.comments[i].blogId === id) {
          const comment = allData.comments[i];
          comment.profile = (await this.getProfileById(comment.profileId)) as {
            id: number;
            name: string;
          };
          results.push(comment);
        }
      }
      return results;
    }
    if (this.commentsCache[id] && Array.isArray(this.commentsCache[id])) {
      return this.commentsCache[id];
    }
    return await fetch(
      `http://localhost:3001/comments?blogId=${id}&_expand=profile`
    )
      .then((response) => response.json())
      .then((response) => {
        this.commentsCache[id] = response;
        return response;
      });
  }
}
export const BlogService = new BlogDataService();
