import fs from 'fs';

export class ReactComponent
{
    constructor(component_name)
    {
      component_name              =  this.lowercaseFirstLetter(component_name);
      this.child_files            =  {
                                        Actions     : { template_path: './tasks/templates/import_file_syntax.js' },
                                        Index       : { template_path: './tasks/templates/comp-page-index.js' },
                                        Constants   : { template_path: '' },
                                        Services    : { template_path: './tasks/templates/import_file_syntax.js' },
                                        ImportsFile : { template_path: './tasks/templates/import_files.js' }
                                     };
      this.child_files[this.capitalizeFirstLetter(component_name)] = { template_path: './tasks/templates/comp-page.js' }
      this.component_folder_path  =  './src/components';
      this.component_path         =  './src/components/'+component_name;
    }

    async create_component()
    {
      await this.create_folder(this.component_path);
      await this.create_other_file(this.child_files);
      await this.create_folder(this.component_path+'/images')
    }

    create_other_file(files_array)
    {
        for( var filename of Object.keys(files_array))
        {
          var file_name     = filename+'.js';
          var new_file_path = this.component_path+"/"+file_name;

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

    create_empty_file(path_with_file_name)
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
            var filename = dest_file.split('/');
            if (err)
                throw err;
            console.log(`${filename[filename.length-1]} ---------  file has been created`);
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
