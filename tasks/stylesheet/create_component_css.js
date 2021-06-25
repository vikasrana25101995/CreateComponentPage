import fs from 'fs';

export class ReactComponentScss
{
    constructor(component_name)
    {
      component_name              = this.capitalizeFirstLetter(component_name);
      this.child_files            = ['Desktop', 'Tablet', 'Mobile', 'Index'];
      this.component_folder_path  = '../../src/stylesheet';
      this.component_path         = '../../src/stylesheet/components/'+component_name;
    }

    async create_css_file()
    {
      await this.create_folder(this.component_path);
      await this.create_other_file(this.child_files);
    }


    create_other_file(files_array)
    {
        for( var filename of files_array)
        {
          var file_name = filename+'.scss';
          var new_file_path = this.component_path+"/"+file_name;
          if(filename != 'Index')
          {
            this.create_empty_file(new_file_path);
          }
          else
          {
            this.create_context_file( '../templates/scss_index.scss', new_file_path)
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


    capitalizeFirstLetter(string)
    {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }

}
