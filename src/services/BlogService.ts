import { Blog as BlogItem } from "../types/blog";
import { Author } from "../types/author";
import { Profile } from "../types/profile";
import { CommentType } from "../types/comment";

const allData: {
  blogs: BlogItem[];
  comments: CommentType[];
  profiles: Author[];
} = {
  blogs: [
    {
      profile: {},
      id: 1,
      title: "First Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 2,
      title: "Second Blog Post",
      profileId: 2,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 3,
      title: "Third Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 4,
      title: "Fourth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 5,
      title: "Fifth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 6,
      title: "Sixth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 7,
      title: "Seventh Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 8,
      title: "Eighth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 9,
      title: "Ninth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 10,
      title: "Tenth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 11,
      title: "Eleventh Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 12,
      title: "Twelth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 13,
      title: "Thirteenth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 14,
      title: "Fourteenth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
    },
    {
      profile: {},
      id: 15,
      title: "Fifteenth Blog Post",
      profileId: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, augue eu feugiat pellentesque, enim risus cursus nisi, quis varius lectus mi in nunc. Ut eu orci vel nunc faucibus maximus. Vivamus orci velit, tincidunt non massa at, volutpat semper ante. Integer rhoncus molestie consequat. Morbi vitae enim a diam placerat ultrices sed et lectus. Integer sed efficitur dolor. Proin malesuada elit nisi.</p><p>Nunc feugiat suscipit iaculis. Nam vitae efficitur turpis. Phasellus facilisis nibh et urna lobortis, eu vehicula eros tempor. Vivamus faucibus facilisis dui, fringilla elementum tellus. Nunc sit amet porttitor orci. Etiam egestas sollicitudin consectetur. Nullam egestas lorem nulla, quis ultrices libero pharetra et. Proin nibh arcu, viverra eu ullamcorper pharetra, gravida vel purus.</p><p>Curabitur congue faucibus ligula vel euismod. Nunc tincidunt scelerisque nulla nec maximus. Vivamus congue lectus non elementum dignissim. Phasellus facilisis eu nisi ac convallis. Aliquam efficitur ante at ex lobortis gravida. Nulla facilisi. Donec eget lectus nec erat tincidunt laoreet sit amet ac mauris. Vivamus vel enim sit amet lacus ultrices eleifend. Phasellus vulputate enim sed dui malesuada, ac suscipit eros volutpat. Quisque leo massa, fermentum ac justo ac, tincidunt feugiat leo. Morbi augue felis, ullamcorper sit amet placerat vel, eleifend quis purus. Phasellus sit amet suscipit dolor, a volutpat dolor. Aenean ut eros et neque volutpat ornare et non magna. Donec sodales varius lacus, et hendrerit lacus laoreet ut. Etiam tincidunt erat eu magna elementum semper. Aliquam dapibus pellentesque nisi, in ultricies nisl.</p><p>Pellentesque dui quam, lacinia ut venenatis vel, dapibus sed felis. Aenean sed magna ligula. Sed non turpis sit amet urna pharetra porta. Aliquam fermentum est at arcu sollicitudin mattis. Nullam hendrerit quam orci, nec malesuada ante feugiat et. Quisque venenatis auctor ipsum, a pellentesque libero gravida ut. In tempor consequat auctor. Cras luctus nibh sed porttitor faucibus. Cras placerat sodales risus, sit amet pretium neque dapibus ac. Cras nec euismod nulla. Nulla ultrices quis lacus ut ultrices. In mattis, dui non maximus luctus, turpis velit gravida nisl, ut ornare nibh eros lobortis massa.</p><p>Morbi ut est condimentum, semper turpis quis, varius tortor. Nunc convallis lobortis pulvinar. Mauris et iaculis est. Sed suscipit eleifend eros, at molestie arcu aliquet vel. Cras sem risus, porttitor in facilisis eget, porttitor non metus. Nunc sit amet maximus enim. Duis laoreet, risus vitae rhoncus volutpat, sem ipsum auctor dui, quis tincidunt justo elit et justo. Maecenas eu nibh et eros placerat aliquam porttitor non purus. Vivamus et eleifend lacus. Donec consectetur vehicula lectus, a eleifend lectus ornare sit amet. Quisque eget mauris ac tortor mattis porttitor sit amet ac orci. Maecenas ac mattis lectus, ac cursus ex. Proin eu metus feugiat, dapibus enim nec, mattis lacus. Quisque a turpis tellus. Mauris massa ante, fringilla sit amet magna ut, ullamcorper vestibulum augue. Pellentesque tempor odio nec risus condimentum, sit amet dapibus dolor dapibus.</p>",
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
    {
      profile: {},
      id: 2,
      title: "This is my second comment",
      profileId: 2,
      blogId: 1,
    },
  ],
  profiles: [
    { id: 1, name: "Mordist" },
    { id: 2, name: "SeanHolt" },
  ],
};
class BlogDataService {
  commentsCache: CommentType[] = [];
  blogCache: BlogItem[] = [];
  allBlogCache: BlogItem[][] = [];
  profilesCache: Author[] = [];

  addBlog(item: BlogItem) {
    if (allData.blogs) {
      item.id = allData.blogs.length + 1;
      allData.blogs.push(item);
      return allData.blogs[allData.blogs.length - 1];
    }
    return {
      id: 1,
      title: "Error Title",
      content: "Error Content",
      profileId: 0,
    } as BlogItem;
  }
  async getAll(perPage: number = 10, currentPage: number = 1) {
    if (allData.blogs) {
      for (let i = 0; i < allData.blogs.length; i++) {
        if (this.profilesCache[allData.blogs[i].profileId]) {
          allData.blogs[i].profile =
            this.profilesCache[allData.blogs[i].profileId];
        } else {
          allData.blogs[i].profile = (await this.getProfileById(
            allData.blogs[i].profileId
          )) as Author;
        }
      }
      const start = Math.max(0, perPage * currentPage - perPage);
      return allData.blogs.slice(start, perPage + start);
    }
    return [];
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
    return [];
  }
  getCountByProfile(id: number) {
    if (allData.blogs) {
      // eslint-disable-next-line eqeqeq
      return allData.blogs.filter((x) => x.profileId == id).length;
    }
    return 0;
  }
  async getProfileById(id: number): Promise<Profile> {
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
    return {} as Profile;
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
    return [];
  }
  async getProfiles() {
    if (allData.profiles && !allData.profiles[0].count) {
      for (let i = 0; i < allData.profiles.length; i++) {
        allData.profiles[i].count = this.getCountByProfile(
          allData.profiles[i].id
        );
      }
    }
    return allData.profiles;
  }
  async getCommentById(id: number) {
    if (allData.comments) {
      for (let i = 0; i < allData.comments.length; i++) {
        if (allData.comments[i].id === id) {
          const comment = allData.comments[i];
          comment.profile = await this.getProfileById(comment.profileId);
          return comment;
        }
      }
    }
    return {} as CommentType;
  }
  async getCommentsByBlog(id: number) {
    if (allData.comments) {
      let results: CommentType[] = [];
      for (let i = 0; i < allData.comments.length; i++) {
        if (allData.comments[i].blogId === id) {
          const comment = allData.comments[i];
          comment.profile = (await this.getProfileById(
            comment.profileId
          )) as Profile;
          results.push(comment);
        }
      }
      return results;
    }
    return [];
  }
}
export const BlogService = new BlogDataService();
