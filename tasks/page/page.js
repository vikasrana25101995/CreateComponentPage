import fs from 'fs';

export class ReactPage
{
    constructor(page_name)
    {
      page_name                   = this.lowercaseFirstLetter(page_name);
      this.child_files            = ['Actions', 'Index', 'Constants', 'Services', 'ImportFiles', page_name];
      this.child_files            =  {
                                        Actions     : { template_path: '../templates/import_file_syntax.js' },
                                        Index       : { template_path: '../templates/comp-page-index.js' },
                                        Constants   : { template_path: '' },
                                        Services    : { template_path: '../templates/import_file_syntax.js' },
                                        ImportFiles : { template_path: '../templates/import_files.js' },
                                     };
      this.child_files[this.capitalizeFirstLetter(page_name)] = { template_path: '../templates/comp-page.js' }
      this.page_path         = '../../src/pages/'+page_name;
    }

    async create_page()
    {
      await this.create_folder(this.page_path);
      await this.create_other_file(this.child_files);
    }


    create_other_file(files_array)
    {
        for( var filename of Object.keys(files_array))
        {
          var file_name     = filename+'.js';
          var new_file_path = this.page_path+"/"+file_name;

          if( files_array[filename]['template_path'] != '')
          {
            this.create_context_file( files_array[filename]['template_path'], new_file_path)
          }
          else
          {
            this.create_empty_file(new_file_path);
          }
        }
    }

    create_file(path_with_file_name)
    {
        fs.open(path_with_file_name, 'w', (err)=>{
           if(err)
           {
              return console.log('err');
           }
        });
    }

    create_folder(path_with_folder_name)
    {
        try
        {
          fs.mkdirSync(path_with_folder_name);
        }
        catch(error)
        {
          console.log('The folder is already created');
        }

    }

    async create_context_file(src_file, dest_file)
    {
        await fs.open(dest_file, 'w', (err)=>{
           if(err)
           {
              return console.log('err');
           }
        });

        await fs.copyFile(src_file, dest_file, (err) =>
        {
            if (err)
                throw err;
            console.log('source.txt was copied to destination.txt');
        });
    }


    lowercaseFirstLetter(string)
    {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }

    capitalizeFirstLetter(string)
    {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

}
